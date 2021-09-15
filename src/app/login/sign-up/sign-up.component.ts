import { ClientService } from "./../../services/client-service/client.service";
import { MatDialog } from "@angular/material/dialog";
import { BaseService } from "./../../services/base-service/base.service";
import { Component, OnInit } from "@angular/core";
import {
  Address,
  clientOccupation,
  countryObject,
  stateObject,
} from "src/app/services/interfaces";
import { ClientIdDialogComponent } from "../client-id-dialog/client-id-dialog.component";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as moment from "moment";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  constructor(
    private clientService: ClientService,
    private dialog: MatDialog,
    private baseService: BaseService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      startDate: [{ value: "", disabled: true }, Validators.required],
      endDate: [{ value: "", disabled: true }, Validators.required],
    });
  }
  dob: string;
  tob: string;
  clientName: string;
  clientMobile: string;
  clientEmail: string;
  clientPOC: string;
  occupationsArray: Array<clientOccupation>;
  selectedOccupation: string;
  password: string;
  countriesArray: Array<countryObject>;
  stateArray: Array<stateObject>;
  selectedCountry: string;
  selectedState: string;
  cityOfBirth: string;
  address: Address = {
    address: "",
    state: "",
    city: "",
    subCity: "",
    country: "",
    pinCode: "",
    siteGeo: "",
    addressId: null,
  };
  clientDisplayPic: any;
  ngOnInit(): void {
    this.clientService.getOccupations().subscribe((res) => {
      this.occupationsArray = res;
    });

    this.clientService.getAllCountries().subscribe((res) => {
      this.countriesArray = res;
    });
    this.form.get("startDate").setValue(new Date()),
      this.form.get("endDate").setValue(new Date()),
      this.form.get("startDate").enable();
    this.form.get("endDate").enable();
  }

  getOccupationObject() {
    return this.occupationsArray.find(
      (occ) => occ.occupationName == this.selectedOccupation
    );
  }
  setDate(event) {
    this.dob = moment(event.value).format("YYYY-MM-DD");
  }
  setTime(event) {
    this.tob = event.target.value;
  }

  submitClient() {
    console.log(this.tob, this.dob);
    let body = {
      clientId: null,
      clientName: this.clientName,
      clientMobile: this.clientMobile,
      clientEmail: this.clientEmail,
      clientDisplayPic: null,
      clientPOC: "clientPOC",
      occupation: this.getOccupationObject(),
      password: this.password,
      address: this.address,
      placeOfBirth: {
        addressId: null,
        address: null,
        siteGeo: null,
        subCity: null,
        city: this.cityOfBirth,
        state: this.selectedState,
        country: this.selectedCountry,
        pinCode: null,
      },
      timeStampOfBirth: `${this.dob},${this.tob}:00`,
    };
    //1993-09-08,16:18:00

    this.clientService.postClient(body).subscribe((res) => {
      if (res) {
        this.openDialog(res.clientId);
      } else {
        this.baseService.callSnackbar.next({
          message:
            "Sign Up Unsuccessful. Email of Contact number may already be registered. Contact Admin for further enquiries.",
          type: "error",
        });
      }
    });
  }
  onCountrySelect(event) {
    this.clientService
      .getAllStates(event)
      .subscribe((res) => (this.stateArray = res));
  }
  openDialog(clientId): void {
    const dialogRef = this.dialog.open(ClientIdDialogComponent, {
      width: "500px",
      data: { id: clientId },
    });
  }
}

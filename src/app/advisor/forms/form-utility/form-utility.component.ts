import { FormService } from "./../../../services/form-service/form.service";
import { AdvisorService } from "./../../../services/advisor-service/advisor.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  AdviceResponse,
  SiteInterface,
  UserQuery,
} from "src/app/services/interfaces";
@Component({
  selector: "app-form-utility",
  templateUrl: "./form-utility.component.html",
  styleUrls: ["./form-utility.component.scss"],
})
export class FormUtilityComponent implements OnInit {
  constructor(
    private advisorService: AdvisorService,
    private formService: FormService,
    private router: Router
  ) {}
  headingArray = ["Zone", "Utility", "Evaluation", "Suggestion"];
  query: UserQuery;
  siteDetails: SiteInterface;
  postMessage: string;
  zoneArray = this.formService.getZoneArray();
  formResponses: Array<AdviceResponse> = [];
  responseArray = [];
  utilityArray = [
    "Safe",
    "Books",
    "RO	",
    "CCTV /Camera (Seeing)",
    "Heater (Heating)",
    "Induction (Heating)",
    "Electric Meter ( Data Capture)",
    "Wifi ( Data Distribution)",
    "Inverter (Storage/ Charge)",
    "Mixer/ Grinder (Breaking)",
    "Microwave (Heating)",
    "Computer ( Education)",
    "Speaker/ Alexa (Sound)",
    "Generator (Energy Generation)",
    "Fridge ( Cold Storage), ",
    "Gas Hob / Microwave (Heating)",
    "W/M (Breaking)",
    "Cleaning Equipment ",
    "Cooler /AC ( Cooling)",
    "TV ( Entertainment)",
  ];
  ngOnInit(): void {
    this.advisorService.advisorForm.subscribe((res: any) => {
      if (res.query && res.siteDetails) {
        this.query = res.query;
        this.siteDetails = res.siteDetails;
      } else {
        this.router.navigateByUrl("/advisor/queries");
      }
    });
    this.formService
      .getForm(this.query.queryId, this.siteDetails.siteId, "LEVEL_1_F_UTILITY")
      .subscribe((res) => {
        this.formResponses = res;
      });
  }
  submitForm() {
    this.responseArray.map((response) => {
      response["level"] = "LEVEL_1_F_UTILITY";
      response["userQuery"] = this.query;
    });
    this.formService.postForm(this.responseArray).subscribe((res) => {
      this.postMessage = res.message;
      document.getElementsByTagName("mat-drawer-content")[0].scrollTo(0, 0);
    });
  }
  getValue(name, zone) {
    const field = this.formResponses.find(
      (field) => field.zone === zone.heading
    );
    if (field) {
      return field[name];
    }
  }

  handleInput(heading, event) {
    var result = this.responseArray.find((obj) => {
      return obj.zone === heading;
    });
    let propertyName = event.target.name;
    let value = event.target.value;
    if (result) {
      result[propertyName] = value;
      let index = this.responseArray.indexOf(result);
      this.responseArray[index] = result;
    } else {
      let newObject = {
        zone: heading,
      };
      newObject[propertyName] = value;
      this.responseArray.push(newObject);
    }
  }
}

import { MatDialog } from "@angular/material/dialog";
import { BaseService } from "./../../services/base-service/base.service";
import { Component, OnInit } from "@angular/core";
import { clientOccupation } from "src/app/services/interfaces";
import { apiUrl } from "src/app/services/env";
import APIConfig from "src/app/services/APIConfig";
import { Router } from "@angular/router";
import { ClientIdDialogComponent } from "../client-id-dialog/client-id-dialog.component";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent implements OnInit {
  constructor(
    private baseService: BaseService,
    private router: Router,
    private dialog: MatDialog
  ) {}
  clientName: string;
  clientMobile: string;
  clientEmail: string;
  clientPOC: string;
  occupationsArray: Array<clientOccupation>;
  selectedOccupation: string;
  password: string;
  ngOnInit(): void {
    this.getOccupations();
  }
  getOccupations() {
    this.baseService
      .get(apiUrl + APIConfig.clientOccupations)
      .subscribe((res) => {
        this.occupationsArray = res;
      });
  }
  getOccupationObject() {
    return this.occupationsArray.find(
      (occ) => occ.occupationName == this.selectedOccupation
    );
  }
  submitClient() {
    let body = {
      clientId: null,
      clientName: this.clientName,
      clientMobile: this.clientMobile,
      clientEmail: this.clientEmail,
      clientDisplayPic: "client",
      clientPOC: "clientPOC",
      occupation: this.getOccupationObject(),
      password: this.password,
    };
    this.baseService
      .post(apiUrl + APIConfig.createClient, body)
      .subscribe((res) => {
        this.openDialog(res.clientId);
      });
  }
  openDialog(clientId): void {
    const dialogRef = this.dialog.open(ClientIdDialogComponent, {
      width: "500px",
      data: { id: clientId },
    });
  }
}

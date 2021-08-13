import { ClientService } from "./../../services/client-service/client.service";
import { MatDialog } from "@angular/material/dialog";
import { BaseService } from "./../../services/base-service/base.service";
import { Component, OnInit } from "@angular/core";
import { clientOccupation } from "src/app/services/interfaces";
import { ClientIdDialogComponent } from "../client-id-dialog/client-id-dialog.component";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent implements OnInit {
  constructor(
    private clientService: ClientService,
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
    this.clientService.getOccupations().subscribe((res) => {
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
    this.clientService.postClient(body).subscribe((res) => {
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

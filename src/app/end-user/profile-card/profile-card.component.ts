import { MatDialog } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";
import { clientObject } from "src/app/services/interfaces";
import { EditProfileComponent } from "../edit-profile/edit-profile.component";

@Component({
  selector: "app-profile-card",
  templateUrl: "./profile-card.component.html",
  styleUrls: ["./profile-card.component.scss"],
})
export class ProfileCardComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  clientInfo: clientObject = JSON.parse(localStorage.getItem("userinfo"));

  ngOnInit(): void {
    console.log(
      this.clientInfo.clientDisplayPic ? true : false,
      this.clientInfo.clientDisplayPic
    );

    window.addEventListener("storage", (event) => {
      console.log("userinfo:", event);
      if (event.key === "userinfo") {
        this.clientInfo = JSON.parse(localStorage.getItem("userinfo"));
      }
    });
  }
  editProfile() {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      width: "80%",
      height: "80%",
      panelClass: "custom-modalbox",
    });
  }
  createImage() {
    var firstName = this.clientInfo.clientName;
    var intials = firstName.charAt(0);
    return intials;
  }
}

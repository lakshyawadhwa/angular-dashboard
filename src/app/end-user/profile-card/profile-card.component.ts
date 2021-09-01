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
  userInfo = JSON.parse(localStorage.getItem("userInfo"));
  accountType = localStorage.getItem("accountType");
  advisorAccount = false;
  ngOnInit(): void {
    if (this.accountType === "advisor") this.advisorAccount = true;

    window.addEventListener("changedProfileObject", (event) => {
      console.log("userInfo:", event);

      this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    });
  }
  editProfile() {
    if (!this.advisorAccount) {
      const dialogRef = this.dialog.open(EditProfileComponent, {
        width: "80%",
        height: "80%",
        panelClass: "custom-modalbox",
      });
    }
  }
  createImage() {
    let fullName = this.advisorAccount
      ? this.userInfo.advisorName
      : this.userInfo.clientName;
    let firstName = fullName.split(" ")[0];
    let lastName = fullName.split(" ")[1];
    let intials =
      firstName.charAt(0).toUpperCase() +
      " " +
      (lastName && lastName.charAt(0).toUpperCase());
    return intials;
  }
  createBase64Image() {
    return "data:image/png;base64," + this.userInfo.clientDisplayPic;
  }
}

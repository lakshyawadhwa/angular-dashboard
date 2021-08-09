import { Component, OnInit } from "@angular/core";
import { clientObject } from "src/app/services/interfaces";

@Component({
  selector: "app-profile-card",
  templateUrl: "./profile-card.component.html",
  styleUrls: ["./profile-card.component.scss"],
})
export class ProfileCardComponent implements OnInit {
  constructor() {}
  clientInfo: clientObject = JSON.parse(localStorage.getItem("userinfo"));

  ngOnInit(): void {
    this.createImage();
  }
  createImage() {
    var firstName = this.clientInfo.clientName;
    var intials = firstName.charAt(0);
    document.getElementById("profileImage").innerHTML = intials;
  }
}

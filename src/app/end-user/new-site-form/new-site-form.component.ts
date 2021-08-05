import { Component, OnInit } from "@angular/core";
import APIConfig from "src/app/services/APIConfig";
import { BaseService } from "src/app/services/base-service/base.service";
import { apiUrl } from "src/app/services/env";
import { clientObject } from "src/app/services/interfaces";

@Component({
  selector: "app-new-site-form",
  templateUrl: "./new-site-form.component.html",
  styleUrls: ["./new-site-form.component.scss"],
})
export class NewSiteFormComponent implements OnInit {
  constructor(private baseService: BaseService) {}
  siteName: string;
  conditionType: string;
  siteAddress: string;
  siteGeo: string;
  conditionsArray: Array<string> = ["new", "used"];
  clientInfo: clientObject = JSON.parse(localStorage.getItem("userinfo"));
  ngOnInit(): void {}
  submitNew() {
    console.log(
      this.siteGeo,
      this.siteName,
      this.conditionType,
      this.siteAddress
    );

    let url = apiUrl + APIConfig.createNewSite;
    let body = {
      siteId: null,
      siteName: this.siteName,
      siteAddress: this.siteAddress,
      siteGeo: this.siteGeo,
      siteTypeId: 1,
      siteMapId: 1,
      client: {
        clientId: this.clientInfo.clientId,
      },
      conditionType: this.conditionType,
    };
    this.baseService.post(url, body).subscribe((res) => {
      console.log(res);
      window.open(`/client/existing`, "_self");
    });
  }
}

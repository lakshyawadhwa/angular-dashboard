import { siteTypeInterface } from "./../../services/interfaces";
import { Router } from "@angular/router";
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
  constructor(private baseService: BaseService, private router: Router) {}
  siteName: string;
  conditionType: string;
  siteAddress: string;
  siteGeo: string;
  siteTypes: Array<siteTypeInterface>;
  selectedSiteType: number;
  conditionsArray: Array<string> = ["New", "Used"];
  clientInfo: clientObject = JSON.parse(localStorage.getItem("userinfo"));
  ngOnInit(): void {
    this.getSiteTypes();
  }
  getSiteTypes() {
    let url = apiUrl + APIConfig.siteTypes;
    this.baseService.get(url).subscribe((res) => {
      this.siteTypes = res;
    });
  }
  submitNew() {
    let url = apiUrl + APIConfig.createNewSite;
    let body = {
      siteId: null,
      siteName: this.siteName,
      siteAddress: this.siteAddress,
      siteGeo: this.siteGeo,
      siteType: {
        siteTypeId: this.selectedSiteType,
      },
      siteMapId: 1,
      client: {
        clientId: this.clientInfo.clientId,
      },
      conditionType: this.conditionType,
    };
    this.baseService.post(url, body).subscribe((res) => {
      console.log(res);
      // window.open(`/client/existing`, "_self");
      this.router.navigate(["/client/existing"]);
    });
  }
  getSelectedSiteType() {
    return this.siteTypes.find(
      (siteType) => siteType.siteTypeId === this.selectedSiteType
    );
  }
}

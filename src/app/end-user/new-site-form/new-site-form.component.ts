import { Address, siteTypeInterface } from "./../../services/interfaces";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import APIConfig from "src/app/services/APIConfig";
import { BaseService } from "src/app/services/base-service/base.service";
import { environment } from "src/environments/environment";
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
  siteAddress: Address;
  siteGeo: string;
  accountType = localStorage.getItem("accountType");
  advisorAccount = this.accountType === "advisor";
  clientEmail: string;
  locationOfFile: string;
  fileNumber: string;
  siteTypes: Array<siteTypeInterface> = JSON.parse(
    localStorage.getItem("siteTypes")
  );
  selectedSiteType: number;
  conditionsArray: Array<string> = ["New", "Used"];
  clientInfo: clientObject = JSON.parse(localStorage.getItem("userInfo"));
  ngOnInit(): void {
    if (!this.siteTypes) this.getSiteTypes();
  }
  getSiteTypes() {
    let url = environment.url + APIConfig.siteTypes;
    this.baseService.get(url).subscribe((res) => {
      localStorage.setItem("siteTypes", JSON.stringify(res));
      this.siteTypes = res;
    });
  }
  submitNew() {
    let url = environment.url + APIConfig.createNewSite;
    let body = {
      siteId: null,
      siteName: this.siteName,
      address: this.siteAddress,
      siteType: {
        siteTypeId: this.selectedSiteType,
      },
      siteMapId: 1,
      ...(this.advisorAccount && { locationOfFile: this.locationOfFile }),
      ...(this.advisorAccount && { fileNumber: this.fileNumber }),
      client: {
        clientId: this.clientInfo.clientId,
        ...(this.advisorAccount && { clientEmail: this.clientEmail }),
      },
      conditionType: this.conditionType,
    };

    this.baseService.post(url, body).subscribe((res) => {
      this.router.navigate([`/${this.accountType}/existing`]);
    });
  }
  getSelectedSiteType() {
    return this.siteTypes.find(
      (siteType) => siteType.siteTypeId === this.selectedSiteType
    );
  }
}

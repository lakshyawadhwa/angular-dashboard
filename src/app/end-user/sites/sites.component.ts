import { BaseService } from "src/app/services/base-service/base.service";
import { Component, OnInit } from "@angular/core";
import { clientObject, SiteInterface } from "src/app/services/interfaces";
import { apiUrl } from "src/app/services/env";
import APIConfig from "src/app/services/APIConfig";

@Component({
  selector: "app-sites",
  templateUrl: "./sites.component.html",
  styleUrls: ["./sites.component.scss"],
})
export class SitesComponent implements OnInit {
  constructor(private baseService: BaseService) {}
  name: string;
  clientInfo: clientObject = JSON.parse(localStorage.getItem("userinfo"));

  sitesArray: Array<SiteInterface> = [];
  ngOnInit(): void {
    let url = apiUrl + APIConfig.getSiteByClient + this.clientInfo.clientId;
    this.baseService.get(url).subscribe((res) => {
      console.log("Assigning Queries: " + res);
      this.sitesArray = res;
    });
  }
  openNewSite() {
    window.open("/client/new", "_self");
  }
}

import { SiteService } from "./../../services/site-service/site.service";
import { BaseService } from "src/app/services/base-service/base.service";
import { Component, OnInit } from "@angular/core";
import { clientObject, SiteInterface } from "src/app/services/interfaces";

@Component({
  selector: "app-advisor-sites",
  templateUrl: "./advisor-sites.component.html",
  styleUrls: ["./advisor-sites.component.scss"],
})
export class AdvisorSitesComponent implements OnInit {
  constructor(
    private baseService: BaseService,
    private siteService: SiteService
  ) {}
  name: string;
  clientInfo: clientObject = JSON.parse(localStorage.getItem("userinfo"));

  sitesArray: Array<SiteInterface> = [];
  ngOnInit(): void {
    this.siteService.getAllSites().subscribe((res) => {
      this.sitesArray = res;
    });
  }
  openNewSite() {
    window.open("/client/new", "_self");
  }
}

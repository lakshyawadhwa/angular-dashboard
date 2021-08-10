import { BaseService } from "src/app/services/base-service/base.service";
import { Component, OnInit } from "@angular/core";
import { clientObject, SiteInterface } from "src/app/services/interfaces";
import { environment } from "src/environments/environment";
import APIConfig from "src/app/services/APIConfig";
import { Router } from "@angular/router";

@Component({
  selector: "app-sites",
  templateUrl: "./sites.component.html",
  styleUrls: ["./sites.component.scss"],
})
export class SitesComponent implements OnInit {
  constructor(private baseService: BaseService, private router: Router) {}
  name: string;
  clientInfo: clientObject = JSON.parse(localStorage.getItem("userinfo"));

  sitesArray: Array<SiteInterface> = [];
  ngOnInit(): void {
    let url =
      environment.url + APIConfig.getSiteByClient + this.clientInfo.clientId;
    this.baseService.get(url).subscribe((res) => {
      console.log("Assigning Queries: " + res);
      this.sitesArray = res;
    });
  }
  openNewSite() {
    this.router.navigateByUrl("/client/new");
  }
}

import { clientObject } from "./../../services/interfaces";
import { Component, OnInit } from "@angular/core";
import { BaseService } from "src/app/services/base-service/base.service";
import { apiUrl } from "src/app/services/env";
import { masterConcern } from "src/app/services/interfaces";
import APIConfig from "../../services/APIConfig";
@Component({
  selector: "app-user-query-form",
  templateUrl: "./user-query-form.component.html",
  styleUrls: ["./user-query-form.component.scss"],
})
export class UserQueryFormComponent implements OnInit {
  constructor(private baseService: BaseService) {}
  sites: Array<string> = ["site1", "site2", "site3"];
  clientInfo: clientObject = JSON.parse(localStorage.getItem("userinfo"));
  masterConcern: masterConcern;
  masterConcerns: Array<masterConcern> = [
    {
      concernId: 1,
      concernName: "Peace of Mind",
    },
    {
      concernId: 2,
      concernName: "Health Problems",
    },
    {
      concernId: 3,
      concernName: "Career Growth",
    },
  ];
  selectedSite: string = "";
  queryText: string = "";
  ngOnInit(): void {
    let url = apiUrl + APIConfig.getSiteByClient + this.clientInfo.clientId;
    this.baseService.get(url).subscribe((res) => {
      this.sites = res;
    });
    this.getMasterConcerns();
  }
  getMasterConcerns() {
    let url = apiUrl + APIConfig.masterConcerns;
    this.baseService.get(url).subscribe((res) => {
      this.masterConcerns = res;
    });
  }
  submitQuery() {
    console.log(this.selectedSite, this.queryText);
    let url = apiUrl + APIConfig.createNewQuery;
    let body = {
      client: {
        clientId: 8,
      },
      queryText: this.queryText,
      siteId: 9,
      horoId: 1,
      masterConcern: this.masterConcern,
    };
    this.baseService.post(url, body).subscribe((res) => {
      console.log(res);
    });
  }
}

import { QueryService } from "src/app/services/query-service/query-service.service";
import { Router } from "@angular/router";
import { clientObject, SiteInterface } from "./../../services/interfaces";
import { Component, OnInit } from "@angular/core";
import { BaseService } from "src/app/services/base-service/base.service";
import { environment } from "src/environments/environment";
import { masterConcern } from "src/app/services/interfaces";
import APIConfig from "../../services/APIConfig";
@Component({
  selector: "app-user-query-form",
  templateUrl: "./user-query-form.component.html",
  styleUrls: ["./user-query-form.component.scss"],
})
export class UserQueryFormComponent implements OnInit {
  constructor(
    private baseService: BaseService,
    private router: Router,
    private queryService: QueryService
  ) {}
  sites: Array<SiteInterface> = [];
  userInfo: clientObject = JSON.parse(localStorage.getItem("userInfo"));
  masterConcern: string;
  masterConcerns: Array<masterConcern> = [];
  showButtons = false;
  selectedSite: number;
  queryText: string = "";
  advisorAccount = localStorage.getItem("accountType") === "advisor";
  clientEmail: string;
  ngOnInit(): void {
    let url =
      environment.url +
      (this.advisorAccount
        ? APIConfig.getAllSites
        : APIConfig.getSiteByClient + this.userInfo.clientId);
    console.log(url);
    this.baseService.get(url).subscribe((res) => {
      this.sites = res;
    });
    this.getMasterConcerns();
  }

  getMasterConcerns() {
    this.queryService.getMasterConcerns().subscribe((res) => {
      this.masterConcerns = res;
    });
  }

  submitQuery() {
    let url = environment.url + APIConfig.createNewQuery;
    let body = {
      client: {
        ...(!this.advisorAccount && { clientId: this.userInfo.clientId }),
        ...(this.advisorAccount && { clientEmail: this.clientEmail }),
      },
      ...(this.advisorAccount && { createdByAdvisor: this.userInfo }),
      queryText: this.queryText,
      siteId: this.selectedSite,
      horoId: 1,
      masterConcern: this.getSelectedConcern(),
    };
    this.baseService.post(url, body).subscribe((res) => {
      this.router.navigate(["/client/queries"]);
    });
  }
  getSelectedConcern() {
    return this.masterConcerns.find(
      (concern) => concern.concernName === this.masterConcern
    );
  }
  toggleButton() {
    this.showButtons = true;
  }
  uploadFunction(event, docType) {}
}

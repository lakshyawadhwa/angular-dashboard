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
  constructor(private baseService: BaseService, private router: Router) {}
  sites: Array<SiteInterface> = [];
  clientInfo: clientObject = JSON.parse(localStorage.getItem("userInfo"));
  masterConcern: string;
  masterConcerns: Array<masterConcern> = [];
  showButtons = false;
  selectedSite: number;
  queryText: string = "";

  ngOnInit(): void {
    let url =
      environment.url + APIConfig.getSiteByClient + this.clientInfo.clientId;
    this.baseService.get(url).subscribe((res) => {
      this.sites = res;
    });
    this.getMasterConcerns();
  }

  getMasterConcerns() {
    let url = environment.url + APIConfig.masterConcerns;
    this.baseService.get(url).subscribe((res) => {
      this.masterConcerns = res;
    });
  }

  submitQuery() {
    console.log(this.selectedSite, this.queryText);
    let url = environment.url + APIConfig.createNewQuery;
    let body = {
      client: {
        clientId: this.clientInfo.clientId,
      },
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

import { BaseService } from "./../../services/base-service/base.service";
import { Component, Input, OnInit } from "@angular/core";
import {
  clientObject,
  SiteInterface,
  UserQuery,
} from "src/app/services/interfaces";
import APIConfig from "src/app/services/APIConfig";
import { apiUrl } from "src/app/services/env";
import * as moment from "moment";
import { QueryService } from "src/app/services/query-service/query-service.service";
import { MatDialog } from "@angular/material/dialog";
import { QueryViewComponent } from "../query-view/query-view.component";
@Component({
  selector: "app-query-card",
  templateUrl: "./query-card.component.html",
  styleUrls: ["./query-card.component.scss"],
})
export class QueryCardComponent implements OnInit {
  constructor(
    private baseService: BaseService,
    public dialog: MatDialog,
    public queryService: QueryService
  ) {}
  @Input() query: UserQuery;
  @Input() clientInfo: clientObject;
  siteDetails: SiteInterface;
  viewQuery = false;
  ngOnInit(): void {
    this.baseService
      .get(apiUrl + APIConfig.getSiteById + this.query.siteId)
      .subscribe((res: SiteInterface) => {
        this.siteDetails = res;
      });
  }
  getDate() {
    return moment(this.query.queryUpdateDatetime).format("DD-MM-YY HH:mm");
  }
  getShortQuery(queryText) {
    return queryText.split(" ").splice(0, 50).join(" ");
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(QueryViewComponent, {
      width: "80%",
      data: { query: this.query, siteDetails: this.siteDetails },
      panelClass: "custom-modalbox",
    });
  }
}

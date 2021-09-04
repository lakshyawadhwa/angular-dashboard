import { QueryService } from "./../../services/query-service/query-service.service";
import { FormGroup } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Component, Inject, Input, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { SiteInterface, UserQuery } from "src/app/services/interfaces";
import * as moment from "moment";
import { ViewResolvedQueriesComponent } from "../view-resolved-queries/view-resolved-queries.component";

@Component({
  selector: "app-view-site-queries",
  templateUrl: "./view-site-queries.component.html",
  styleUrls: ["./view-site-queries.component.scss"],
})
export class ViewSiteQueriesComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ViewSiteQueriesComponent>,
    public queryService: QueryService,
    public resolvedQueryDialog: MatDialog
  ) {}

  formControl: FormControl;
  queryArray: Array<UserQuery>;
  inactiveQueryArray: Array<UserQuery>;
  queryView: FormGroup = new FormGroup({});
  noQueries = false;
  accountType = localStorage.getItem("accountType");
  ngOnInit(): void {
    this.queryService
      .getQueriesBySite(this.data.site.siteId)
      .subscribe((res) => {
        if (res.length < 1) {
          this.noQueries = true;
        } else {
          this.setQueryArrays(res);
        }
      });
  }
  getDate(time) {
    return moment(time).format("DD-MM-YY HH:mm");
  }
  setQueryArrays(response: Array<UserQuery>) {
    this.inactiveQueryArray = response.filter((query) => {
      if (!query.active) return query;
    });
    this.queryArray = response.filter((query) => {
      if (query.active) return query;
    });
  }
  openResolvedQueryView(query) {
    const dialogRef = this.resolvedQueryDialog.open(
      ViewResolvedQueriesComponent,
      {
        width: "80%",
        data: { query: query },
        panelClass: "custom-modalbox",
      }
    );
  }
}

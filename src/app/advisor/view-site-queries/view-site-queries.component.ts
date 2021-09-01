import { QueryService } from "./../../services/query-service/query-service.service";
import { FormGroup } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Component, Inject, Input, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { SiteInterface, UserQuery } from "src/app/services/interfaces";
import * as moment from "moment";

@Component({
  selector: "app-view-site-queries",
  templateUrl: "./view-site-queries.component.html",
  styleUrls: ["./view-site-queries.component.scss"],
})
export class ViewSiteQueriesComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ViewSiteQueriesComponent>,
    public queryService: QueryService
  ) {}

  formControl: FormControl;
  queryArray: Array<UserQuery>;
  inactiveQueryArray: Array<UserQuery>;
  queryView: FormGroup = new FormGroup({});
  noQueries = false;
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
}

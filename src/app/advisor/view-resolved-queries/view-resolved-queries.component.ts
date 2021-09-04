import { QueryService } from "./../../services/query-service/query-service.service";
import { FormGroup } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Component, Inject, Input, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { SiteInterface, UserQuery } from "src/app/services/interfaces";
import * as moment from "moment";
@Component({
  selector: "app-view-resolved-queries",
  templateUrl: "./view-resolved-queries.component.html",
  styleUrls: ["./view-resolved-queries.component.scss"],
})
export class ViewResolvedQueriesComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ViewResolvedQueriesComponent>,
    public queryService: QueryService
  ) {}

  queryView: FormGroup = new FormGroup({});
  query = this.data.query;
  ngOnInit(): void {}
  getDate(time) {
    return moment(time).format("DD-MM-YY HH:mm");
  }
}

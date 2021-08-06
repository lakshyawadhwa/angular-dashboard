import { clientObject, UserQuery } from "./../../services/interfaces";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import APIConfig from "src/app/services/APIConfig";
import { BaseService } from "src/app/services/base-service/base.service";
import { apiUrl } from "src/app/services/env";
import { UserNewQueryDialogComponent } from "../user-new-query-dialog/user-new-query-dialog.component";
import { QueryService } from "src/app/services/query-service/query-service.service";
@Component({
  selector: "app-user-queries",
  templateUrl: "./user-queries.component.html",
  styleUrls: ["./user-queries.component.scss"],
})
export class UserQueriesComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private baseService: BaseService,
    private queryService: QueryService
  ) {}
  name: string;
  clientInfo: clientObject = JSON.parse(localStorage.getItem("userinfo"));
  selectedQuery: UserQuery;
  queryArray: Array<UserQuery> = [];
  ngOnInit(): void {
    let url = apiUrl + APIConfig.getClientQueries + this.clientInfo.clientId;
    this.baseService.get(url).subscribe((res) => {
      console.log("Assigning Queries: " + res);
      this.queryArray = res;
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(UserNewQueryDialogComponent, {
      width: "250px",
      data: { name: this.name },
    });

    // dialogRef.afterClosed().subscribe((result) => {
    // 	console.log("The dialog was closed");
    // 	this.animal = result;
    // });
  }
}

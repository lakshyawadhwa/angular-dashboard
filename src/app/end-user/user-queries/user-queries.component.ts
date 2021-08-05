import { clientObject } from "./../../services/interfaces";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import APIConfig from "src/app/services/APIConfig";
import { BaseService } from "src/app/services/base-service/base.service";
import { apiUrl } from "src/app/services/env";
import { UserQuery } from "src/app/services/query-service/query-service.service";
import { UserNewQueryDialogComponent } from "../user-new-query-dialog/user-new-query-dialog.component";
@Component({
  selector: "app-user-queries",
  templateUrl: "./user-queries.component.html",
  styleUrls: ["./user-queries.component.scss"],
})
export class UserQueriesComponent implements OnInit {
  constructor(public dialog: MatDialog, private baseService: BaseService) {}
  name: string;
  clientInfo: clientObject = JSON.parse(localStorage.getItem("userinfo"));

  queryArray: Array<UserQuery> = [
    {
      queryID: 1,
      clientId: 1,
      horoscopeID: 1,
      queryText: "Query 1",
      createdTime: new Date(),
      siteID: 1,
    },
    {
      queryID: 2,
      clientId: 2,
      horoscopeID: 2,
      queryText: "Query 2",
      createdTime: new Date(),
      siteID: 2,
    },
  ];
  ngOnInit(): void {
    let url = apiUrl + APIConfig.getClientQueries + this.clientInfo.clientId;
    this.baseService.get(url).subscribe((res) => {
        console.log("Assigning Queries: " + res)
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

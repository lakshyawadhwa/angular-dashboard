import { UserNewQueryDialogComponent } from "./../../end-user/user-new-query-dialog/user-new-query-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { QueryService } from "src/app/services/query-service/query-service.service";
import { Component, OnInit } from "@angular/core";
import { UserQuery } from "src/app/services/interfaces";

@Component({
  selector: "app-advisor-queries",
  templateUrl: "./advisor-queries.component.html",
  styleUrls: ["./advisor-queries.component.scss"],
})
export class AdvisorQueriesComponent implements OnInit {
  constructor(private queryService: QueryService, private dialog: MatDialog) {}
  queries: Array<UserQuery>;
  ngOnInit(): void {
    this.queryService.getAllQueries().subscribe((res) => {
      this.queries = res;
    });
    this.queryService.loadNewQueries.subscribe((res) => {
      this.queries = res;
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(UserNewQueryDialogComponent, {
      width: "250px",
    });
  }
}

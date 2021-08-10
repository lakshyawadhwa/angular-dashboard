import { QueryService } from "src/app/services/query-service/query-service.service";
import { Component, OnInit } from "@angular/core";
import { UserQuery } from "src/app/services/interfaces";

@Component({
  selector: "app-advisor-queries",
  templateUrl: "./advisor-queries.component.html",
  styleUrls: ["./advisor-queries.component.scss"],
})
export class AdvisorQueriesComponent implements OnInit {
  constructor(private queryService: QueryService) {}
  queries: Array<UserQuery>;
  ngOnInit(): void {
    this.queryService.getAllQueries().subscribe((res) => {
      queries = res;
    });
  }
}

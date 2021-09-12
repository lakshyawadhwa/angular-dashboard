import { QueryService } from "src/app/services/query-service/query-service.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-basic-stats",
  templateUrl: "./basic-stats.component.html",
  styleUrls: ["./basic-stats.component.scss"],
})
export class BasicStatsComponent implements OnInit {
  constructor(private queryService: QueryService) {}
  totalQueries: number = 0;
  resolvedQueries: number = 0;
  activeQueries: number = 0;
  ngOnInit(): void {
    this.queryService.getQueryStats().subscribe((res) => {
      this.resolvedQueries = res.ALL_QUERIES_RESOLVED_COUNT;
      this.totalQueries = res.ALL_QUERIES_COUNT;
      this.activeQueries = res.ALL_QUERIES_ACTIVE_COUNT;
    });
  }
}

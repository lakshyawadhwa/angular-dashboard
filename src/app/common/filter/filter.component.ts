import { QueryService } from "src/app/services/query-service/query-service.service";
import { Component, OnInit } from "@angular/core";
import { masterConcern } from "src/app/services/interfaces";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {
  constructor(private queryService: QueryService) {}
  searchText: string;
  searchType: string;
  masterConcerns: Array<masterConcern>;
  ngOnInit(): void {
    this.queryService.getMasterConcerns().subscribe((res) => {
      this.masterConcerns = res;
    });
  }
  setSearchType(type: string) {
    this.searchType = type;
  }
  sendSearchQuery() {
    console.log(this.searchText);
  }
}

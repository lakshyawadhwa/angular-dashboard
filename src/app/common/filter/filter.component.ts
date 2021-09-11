import { QueryService } from "src/app/services/query-service/query-service.service";
import { Component, OnInit } from "@angular/core";
import { masterConcern, siteTypeInterface } from "src/app/services/interfaces";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {
  constructor(private queryService: QueryService) {}
  searchText: string;
  masterConcerns: Array<masterConcern>;
  filterArray: Array<{ searchType: string; searchText: string }> = [];
  finalArray;
  siteTypes: Array<siteTypeInterface> = JSON.parse(
    localStorage.getItem("siteTypes")
  );
  ngOnInit(): void {
    this.queryService.getMasterConcerns().subscribe((res) => {
      this.masterConcerns = res;
    });
  }

  setSearchType(type: string) {
    console.log(this.filterArray);
    if (this.filterArray.length <= 2)
      this.filterArray.push({ searchType: type, searchText: "" });
  }
  getInput(event, searchType) {
    let text = event.currentTarget.value;
    this.filterArray.forEach((obj, index) => {
      if (obj.searchType === searchType) {
        this.filterArray[index] = { ...obj, searchText: text };
      }
    });
  }
  sendSearchQuery() {
    console.log(this.filterArray);
  }
  removeSearchQuery(type) {
    const index = this.filterArray.findIndex((filter) => {
      filter.searchType === type;
    });
    this.filterArray.splice(index, 1);
  }
  setSiteType(siteType) {
    if (this.filterArray.length <= 2) {
      this.filterArray.push({
        searchType: "siteType",
        searchText: siteType.siteTypeName,
      });
    }
  }
  setConcern(concern) {
    if (this.filterArray.length <= 2) {
      this.filterArray.push({
        searchType: "concern",
        searchText: concern.concernName,
      });
    }
  }
}

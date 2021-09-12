import { SiteService } from "./../../services/site-service/site.service";
import { QueryService } from "src/app/services/query-service/query-service.service";
import { Component, Input, OnInit } from "@angular/core";
import { masterConcern, siteTypeInterface } from "src/app/services/interfaces";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {
  constructor(
    private queryService: QueryService,
    private siteService: SiteService
  ) {}
  @Input() dataType: string;
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
    if (this.filterArray.length <= 4)
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

  removeSearchQuery(type) {
    const index = this.filterArray.findIndex((filter) => {
      filter.searchType === type;
    });
    this.filterArray.splice(index, 1);
  }
  setSiteType(siteType) {
    if (this.filterArray.length <= 4) {
      this.filterArray.push({
        searchType: "siteType",
        searchText: siteType.siteTypeName,
      });
    }
  }
  setConcern(concern) {
    if (this.filterArray.length <= 4) {
      this.filterArray.push({
        searchType: "queryConcern",
        searchText: concern.concernName,
      });
    }
  }
  getLabel(text) {
    return text.replace(/([A-Z])/g, " $1").trim();
  }

  sendSearchQuery() {
    let baseSearchObject = {
      country: "",
      city: "",
      state: "",
      subCity: "",
      siteType: "",
      minCoveredAreaSize: "",
      maxCoveredAreaSize: "",
      minPlotAreaSize: "",
      maxPlotAreaSize: "",
      clientPhone: "",
      clientEmail: "",
      clientName: "",
      queryConcern: "",
    };
    this.filterArray.forEach((filter) => {
      baseSearchObject[filter.searchType] = filter.searchText;
    });
    if (this.dataType === "queries") {
      this.searchQueries(baseSearchObject);
    } else if (this.dataType === "sites") {
      this.searchSites(baseSearchObject);
    }
  }
  searchQueries(baseSearchObject) {
    this.queryService.searchQueries(baseSearchObject).subscribe((res) => {});
  }
  searchSites(baseSearchObject) {
    this.siteService.searchSites(baseSearchObject).subscribe((res) => {});
  }
}

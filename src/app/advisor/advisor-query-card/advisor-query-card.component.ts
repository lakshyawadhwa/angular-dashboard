import { QueryService } from "src/app/services/query-service/query-service.service";
import { SiteService } from "./../../services/site-service/site.service";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { AdvisorService } from "./../../services/advisor-service/advisor.service";
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as moment from "moment";
import { AdvisorQueryViewComponent } from "../advisor-query-view/advisor-query-view.component";
import { SiteInterface, UserQuery } from "src/app/services/interfaces";
import { QueryResolvingViewComponent } from "../query-resolving-view/query-resolving-view.component";
@Component({
  selector: "app-advisor-query-card",
  templateUrl: "./advisor-query-card.component.html",
  styleUrls: ["./advisor-query-card.component.scss"],
})
export class AdvisorQueryCardComponent implements OnInit {
  constructor(
    private router: Router,
    private advisorService: AdvisorService,
    private dialog: MatDialog,
    private siteService: SiteService,
    private queryService: QueryService
  ) {}
  @Input() query: UserQuery;
  siteDetails: SiteInterface;
  ngOnInit(): void {
    this.siteService.getSiteById(this.query.siteId).subscribe((res) => {
      this.siteDetails = res;
    });
  }

  getDate() {
    return moment(this.query.queryUpdateDatetime).format("DD-MM-YY HH:mm");
  }
  getShortQuery(queryText) {
    return queryText.split(" ").splice(0, 50).join(" ");
  }

  openDialog(): void {
    this.advisorService.advisorForm.next({
      query: this.query,
      siteDetails: this.siteDetails,
    });
    const dialogRef = this.dialog.open(AdvisorQueryViewComponent, {
      width: "80%",
      data: { query: this.query, siteDetails: this.siteDetails },
      panelClass: "custom-modalbox",
    });
  }
  resolveQuery() {
    event.stopPropagation();
    const dialogRef = this.dialog.open(QueryResolvingViewComponent, {
      data: this.query.queryId,
      width: "80%",
    });
  }
}

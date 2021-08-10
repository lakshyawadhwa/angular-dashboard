import { SiteService } from "./../../services/site-service/site.service";
import { MatDialog } from "@angular/material/dialog";
import { AdvisorService } from "./../../services/advisor-service/advisor.service";
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as moment from "moment";
import { AdvisorQueryViewComponent } from "../advisor-query-view/advisor-query-view.component";
import { SiteInterface, UserQuery } from "src/app/services/interfaces";
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
    private siteService: SiteService
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
}

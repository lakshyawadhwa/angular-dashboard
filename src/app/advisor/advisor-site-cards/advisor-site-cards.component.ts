import { BaseService } from "src/app/services/base-service/base.service";
import { Component, Input, OnInit } from "@angular/core";
import { clientObject, SiteInterface } from "src/app/services/interfaces";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-advisor-site-cards",
  templateUrl: "./advisor-site-cards.component.html",
  styleUrls: ["./advisor-site-cards.component.scss"],
})
export class AdvisorSiteCardsComponent implements OnInit {
  constructor(private baseService: BaseService, public dialog: MatDialog) {}
  @Input() site: SiteInterface;
  @Input() clientInfo: clientObject;
  ngOnInit(): void {
    console.log(this.site, "site page");
  }
}

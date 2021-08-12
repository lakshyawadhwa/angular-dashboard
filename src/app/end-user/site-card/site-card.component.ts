import { BaseService } from "src/app/services/base-service/base.service";
import { Component, Input, OnInit } from "@angular/core";
import { clientObject, SiteInterface } from "src/app/services/interfaces";
import { environment } from "src/environments/environment";
import APIConfig from "src/app/services/APIConfig";
import * as moment from "moment";
import { MatDialog } from "@angular/material/dialog";
import { SiteViewComponent } from "../site-view/site-view.component";
import { ViewSiteQueriesComponent } from "src/app/advisor/view-site-queries/view-site-queries.component";
@Component({
  selector: "app-site-card",
  templateUrl: "./site-card.component.html",
  styleUrls: ["./site-card.component.scss"],
})
export class SiteCardComponent implements OnInit {
  constructor(private baseService: BaseService, public dialog: MatDialog) {}
  @Input() site: SiteInterface;
  @Input() clientInfo: clientObject;
  ngOnInit(): void {
    console.log(this.site, "site page");
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(SiteViewComponent, {
      width: "80%",
      data: this.site,
      panelClass: "custom-modalbox",
    });
  }
  openQueryDialog() {
    event.stopPropagation();

    const dialogRef = this.dialog.open(ViewSiteQueriesComponent, {
      width: "80%",
      height: "80%",
      data: { siteId: this.site.siteId },
      panelClass: "custom-modalbox",
    });
  }
}

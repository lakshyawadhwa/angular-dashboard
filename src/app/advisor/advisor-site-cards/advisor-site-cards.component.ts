import { APIConfig } from "src/app/services/APIConfig";
import { environment } from "./../../../environments/environment.prod";
import { SiteService } from "./../../services/site-service/site.service";
import { BaseService } from "src/app/services/base-service/base.service";
import { Component, Input, OnInit } from "@angular/core";
import { clientObject, SiteInterface } from "src/app/services/interfaces";
import { MatDialog } from "@angular/material/dialog";
import { ViewSiteQueriesComponent } from "../view-site-queries/view-site-queries.component";

@Component({
  selector: "app-advisor-site-cards",
  templateUrl: "./advisor-site-cards.component.html",
  styleUrls: ["./advisor-site-cards.component.scss"],
})
export class AdvisorSiteCardsComponent implements OnInit {
  constructor(public dialog: MatDialog, private baseService: BaseService) {}
  @Input() site: SiteInterface;
  @Input() clientInfo: clientObject;
  ngOnInit(): void {
    console.log(this.site, "site page");
  }
  openDialog() {
    const dialogRef = this.dialog.open(ViewSiteQueriesComponent, {
      width: "80%",
      height: "80%",
      data: { site: this.site },
      panelClass: "custom-modalbox",
    });
  }

  getPatri(siteId) {
    this.baseService
      .getFile(environment.url + APIConfig.getPatri + siteId)
      .subscribe((res) => {
        if (res.size !== 0) {
          this.generatePDF(res);
        } else {
          this.baseService.callSnackbar.next({
            message: "Patri cannot be generated. Please contact Admin.",
            type: "error",
          });
        }
      });
  }
  generatePDF(res) {
    const linkSource = `data:application/pdf;base64,${res}`;
    const downloadLink = document.createElement("a");
    const fileName = `patri-${this.site.siteId}.pdf`;
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }
}

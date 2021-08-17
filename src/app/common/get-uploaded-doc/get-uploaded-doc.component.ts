import { BaseService } from "src/app/services/base-service/base.service";
import { Component, Input, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import APIConfig from "src/app/services/APIConfig";

@Component({
  selector: "app-get-uploaded-doc",
  templateUrl: "./get-uploaded-doc.component.html",
  styleUrls: ["./get-uploaded-doc.component.scss"],
})
export class GetUploadedDocComponent implements OnInit {
  @Input() queryId: number;
  @Input() siteId: number;
  @Input() clientId: number;
  @Input() documentType: string;
  noFile = false;
  fileAvailable = false;
  constructor(public baseService: BaseService) {}

  ngOnInit(): void {}
  getFile() {
    let url =
      environment.url +
      APIConfig.uploadFile +
      `${this.queryId}/${this.siteId}/${this.clientId}/${this.documentType}`;
    this.baseService.getFile(url).subscribe((res) => {
      console.log(res);
      this.generatePDF(res);
      if (res) {
        this.baseService.callSnackbar.next({
          message: "Downloading file",
          type: "success",
        });
      } else {
        this.baseService.callSnackbar.next({
          message: "This document is not vaulted by Client.",
          type: "error",
        });
      }
    });
  }
  generatePDF(res) {
    const linkSource = `data:application/pdf;base64,${res}`;
    const downloadLink = document.createElement("a");
    const fileName = `${this.clientId}_${this.queryId}_${this.siteId}_${this.documentType}.pdf`; //ClientId_QueryId_SiteId_Part_Layout;
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }
}

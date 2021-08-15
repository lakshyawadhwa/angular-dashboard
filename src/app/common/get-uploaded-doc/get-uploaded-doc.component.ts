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
    this.baseService.get(url).subscribe((res) => {
      if (res) {
        this.fileAvailable = true;
      } else {
        this.noFile = true;
      }
    });
  }
}

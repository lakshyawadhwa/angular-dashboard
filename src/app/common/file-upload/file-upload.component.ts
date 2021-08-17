import { BaseService } from "src/app/services/base-service/base.service";
import { Component, Input, OnInit } from "@angular/core";
import APIConfig from "src/app/services/APIConfig";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.scss"],
})
export class FileUploadComponent implements OnInit {
  fileName = "";
  @Input() clientId: number;
  @Input() siteId: number;
  @Input() queryId: number;
  @Input() name: string;
  @Input() title: string;
  @Input() type: string;
  showSuccess = false;
  postMessage = "";

  constructor(private baseService: BaseService) {}
  ngOnInit(): void {}
  onFileSelected(event) {
    const file: File = event.target.files[0];
    console.log(file);
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();

      formData.append("file", file);
      formData.append("clientId", "" + this.clientId);

      if (this.type === "displayPic") {
        this.uploadDisplayPicture(formData);
      } else {
        formData.append("siteId", "" + this.siteId);
        formData.append("documentType", this.name);
        formData.append("queryId", "" + this.queryId);
        this.uploadCall(formData);
      }
    }
  }
  uploadDisplayPicture(form: FormData) {
    let url = environment.url + APIConfig.uploadProfilePic;
    this.baseService.postFile(url, form).subscribe((res) => {
      this.postMessage = res;
    });
  }
  uploadCall(form: FormData) {
    let url = environment.url + APIConfig.uploadFile;
    this.baseService.postFile(url, form).subscribe((res) => {
      if (res.toLowerCase() === "file uploaded!") {
        this.baseService.callSnackbar.next({ message: res, type: "error" });
      } else {
        this.baseService.callSnackbar.next({ message: res, type: "success" });
      }
    });
  }
}

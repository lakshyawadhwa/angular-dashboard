import { BaseService } from "src/app/services/base-service/base.service";
import { Component, Input } from "@angular/core";
import APIConfig from "src/app/services/APIConfig";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.scss"],
})
export class FileUploadComponent {
  fileName = "";
  @Input() clientId: number;
  @Input() siteId: number;
  @Input() queryId: number;
  @Input() name: string;
  @Input() title: string;
  showSuccess = false;
  constructor(private baseService: BaseService) {}

  onFileSelected(event) {
    const file: File = event.target.files[0];
    console.log(file);
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();

      formData.append("file", file);
      formData.append("clientId", "" + this.clientId);
      formData.append("siteId", "" + this.siteId);
      formData.append("documentType", this.name);
      formData.append("queryId", "" + this.queryId);
      this.uploadCall(formData);
    }
  }

  uploadCall(form) {
    let url = environment.url + APIConfig.uploadFile;
    this.baseService.postFile(url, form).subscribe((res) => {
      if (res === "File Uploaded!") this.showSuccess = true;
    });
  }
}

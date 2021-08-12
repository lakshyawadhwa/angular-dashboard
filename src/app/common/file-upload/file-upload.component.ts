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
  @Input() name: string;
  @Input() title: string;

  constructor(private baseService: BaseService) {}

  onFileSelected(event) {
    const file: File = event.target.files[0];
    console.log(file);
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      console.log(formData);

      formData.append("file", file);
      console.log(formData);

      formData.append("clientId", "" + this.clientId);
      console.log(formData);

      formData.append("siteId", "" + this.siteId);
      console.log(formData);

      formData.append("documentType", this.name);
      console.log(JSON.stringify(formData));

      this.uploadCall(formData);
    }
    // if (file) {
    //   this.fileName = file.name;

    //   const formData = new FormData();

    //   formData.append("thumbnail", file);
    //   console.log(formData);
    //   this.uploadCall(formData);

    //   // const upload$ = this.http.post("/api/thumbnail-upload", formData);

    //   // upload$.subscribe();
    // }
  }

  uploadCall(form) {
    let url = environment.url + APIConfig.uploadFile;
    this.baseService.postFile(url, form).subscribe((res) => {
      console.log(res);
    });
  }
}

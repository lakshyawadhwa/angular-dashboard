import { BaseService } from "src/app/services/base-service/base.service";
import { ClientService } from "./../../services/client-service/client.service";
import { Component, Inject, OnInit } from "@angular/core";
import { clientObject, clientOccupation } from "src/app/services/interfaces";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { environment } from "src/environments/environment";
import APIConfig from "src/app/services/APIConfig";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.scss"],
})
export class EditProfileComponent implements OnInit {
  constructor(
    private clientService: ClientService,
    private dialogRef: MatDialogRef<EditProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditProfileComponent,
    private baseService: BaseService
  ) {}
  occupationsArray: Array<clientOccupation>;
  postResponse: boolean;
  clientInfo: clientObject = JSON.parse(localStorage.getItem("userinfo"));
  selectedOccupation = this.clientInfo.occupation.occupationName;
  postMessage: string;
  formData = new FormData();

  ngOnInit(): void {
    this.clientService.getOccupations().subscribe((res) => {
      this.occupationsArray = res;
    });
    console.log("occupation", this.clientInfo);
    window.addEventListener("storage", (event) => {
      console.log("userinfo:", event);
      if (event.key === "userinfo") {
        this.clientInfo = JSON.parse(localStorage.getItem("userinfo"));
      }
    });
  }

  getOccupationObject() {
    return this.occupationsArray.find(
      (occ) => occ.occupationName == this.selectedOccupation
    );
  }
  submit() {
    let body = {
      clientId: this.clientInfo.clientId,
      clientName: this.clientInfo.clientName,
      clientMobile: this.clientInfo.clientMobile,
      clientEmail: this.clientInfo.clientEmail,
      clientDisplayPic: this.clientInfo.clientDisplayPic,
      clientPOC: "clientPOC",
      occupation: this.getOccupationObject(),
      password: this.clientInfo.password,
    };

    this.clientService.postClient(body).subscribe((res: any) => {
      if (this.formData.get("file")) {
        this.uploadDisplayPicture(this.formData);
      } else {
        localStorage.setItem("userinfo", JSON.stringify(res));
        window.dispatchEvent(new Event("changedProfileObject"));
        setTimeout(() => {
          this.dialogRef.close();
        }, 1500);
      }
    });
  }
  onFileSelected(event) {
    const file: File = event.target.files[0];
    if (file) {
      this.formData.append("file", file);
      this.formData.append("clientId", "" + this.clientInfo.clientId);
    }
  }

  uploadDisplayPicture(form: FormData) {
    let url = environment.url + APIConfig.uploadProfilePic;
    this.baseService.postFile(url, form).subscribe((res) => {
      this.postResponse = true;
      localStorage.setItem("userinfo", res);
      window.dispatchEvent(new Event("changedProfileObject"));
      setTimeout(() => {
        this.dialogRef.close();
      }, 1500);
    });
  }
}

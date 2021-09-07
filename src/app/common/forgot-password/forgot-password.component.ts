import { BaseService } from "./../../services/base-service/base.service";
import { EditProfileComponent } from "./../../end-user/edit-profile/edit-profile.component";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ClientService } from "./../../services/client-service/client.service";
import { MatDialogRef } from "@angular/material/dialog";
import { Component, Inject, OnInit } from "@angular/core";
import APIConfig from "src/app/services/APIConfig";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(
    private ClientService: ClientService,
    private dialogRef: MatDialogRef<ForgotPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditProfileComponent,
    private baseService: BaseService
  ) {}

  ngOnInit(): void {}
  emailID: string;
  onSubmit() {
    if (this.emailID) {
      this.baseService
        .post(APIConfig.forgotPassword, {
          clientEmail: this.emailID,
        })
        .subscribe((res) => {
          this.baseService.callSnackbar.next({
            message: "Please check your email to recover your passowrd",
            type: "success",
          });
        });
    }
  }
  //body= {"clientEmail" : "ojas.wadhwa@gmail.com"}
}

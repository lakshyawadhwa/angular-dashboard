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
    private clientService: ClientService,
    private baseService: BaseService,
    private dialogRef: MatDialogRef<ForgotPasswordComponent>
  ) {}

  ngOnInit(): void {}
  emailID: string;
  showLoader = false;
  onSubmit() {
    console.log(this.emailID);
    if (this.emailID) {
      this.showLoader = true;
      this.clientService
        .forgotPassword({
          clientEmail: this.emailID,
        })
        .subscribe((res: string) => {
          this.showLoader = false;
          this.baseService.callSnackbar.next({
            message: res,
            type: "success",
          });
          // this.dialogRef.close();
        });
    }
  }
}

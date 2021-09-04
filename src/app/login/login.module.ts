import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignInComponent } from "./sign-in/sign-in.component";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ClientIdDialogComponent } from "./client-id-dialog/client-id-dialog.component";
import { SnackbarModule } from "../common/snackbar/snackbar.module";

@NgModule({
  declarations: [SignInComponent, SignUpComponent, ClientIdDialogComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatRadioModule,
    SnackbarModule,
  ],
})
export class LoginModule {}

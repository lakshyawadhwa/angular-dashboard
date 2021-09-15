import { BaseService } from "./../../services/base-service/base.service";
import { MatDialog } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/common/auth.service";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { ForgotPasswordComponent } from "src/app/common/forgot-password/forgot-password.component";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent implements OnInit {
  username: string;
  password: string;
  loginError: boolean;
  loginReq: FormData;
  accountType: string = "client";
  usernamePlaceholder: string = "Client Email or Phone";
  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location,
    private dialogRef: MatDialog,
    private baseService: BaseService
  ) {}

  ngOnInit(): void {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        return false;
      }
    });
    // if (this.authService.isLoggedIn()) this.router.navigateByUrl("/client");
  }

  signIn() {
    this.loginReq = new FormData();
    this.loginReq.append("username", this.username);
    this.loginReq.append("password", this.password);

    this.authService.login(this.loginReq, this.accountType).subscribe(
      (response) => {
        if (response) {
          this.goToHome();
        } else {
          this.showLoginError();
        }
      },
      (error) => {
        console.log(error);
        this.showLoginError();
      }
    );
  }

  setAccountType() {
    if (this.accountType == "client") {
      this.usernamePlaceholder = "Client Email or Phone";
    } else if (this.accountType == "advisor") {
      this.usernamePlaceholder = "Advisor Email or Phone";
    }
  }
  showLoginError() {
    this.loginError = true;
  }

  goToHome() {
    if (this.accountType === "client") {
      this.location.replaceState("/");
      this.location.go("/client");
      this.router.navigate(["/client"]);
    } else if (this.accountType === "advisor") {
      this.location.replaceState("/");
      this.location.go("/advisor");
      this.router.navigate(["/advisor"]);
    }
    this.baseService.callSnackbar.next(null);
  }
  signUp() {
    this.router.navigateByUrl("/login/sign-up");
  }
  forgotPassword() {
    this.dialogRef.open(ForgotPasswordComponent, {
      width: "60%",
    });
  }
}

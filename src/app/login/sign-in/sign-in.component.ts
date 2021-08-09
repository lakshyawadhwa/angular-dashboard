import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/common/auth.service";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

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
  usernamePlaceholder: string = "Client ID";
  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) this.router.navigateByUrl("/client");
  }

  signIn() {
    this.loginReq = new FormData();
    this.loginReq.append("username", this.username);
    this.loginReq.append("password", this.password);
    this.authService.login(this.loginReq).subscribe(
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
      console.log("client");
      this.usernamePlaceholder = "Client ID";
    } else if (this.accountType == "advisor") {
      console.log("advisor");
      this.usernamePlaceholder = "Advisor ID";
    }
  }
  showLoginError() {
    this.loginError = true;
  }

  goToHome() {
    this.location.replaceState("/");
    this.location.go("/client");
    this.router.navigate(["/client"]);
  }
  signUp() {
    this.router.navigateByUrl("/login/sign-up");
  }
}

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
    document.addEventListener("keydown", ($event) =>
      this.keyDownFunction($event)
    );
    if (this.authService.isLoggedIn()) this.router.navigateByUrl("/client");
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
  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.signIn();
    }
  }
  setAccountType() {
    if (this.accountType == "client") {
      this.usernamePlaceholder = "Client ID";
    } else if (this.accountType == "advisor") {
      this.usernamePlaceholder = "Advisor ID";
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
  }
  signUp() {
    this.router.navigateByUrl("/login/sign-up");
  }
}

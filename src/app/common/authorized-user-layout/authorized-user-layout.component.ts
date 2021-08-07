import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-authorized-user-layout",
  templateUrl: "./authorized-user-layout.component.html",
  styleUrls: ["./authorized-user-layout.component.scss"],
})
export class AuthorizedUserLayoutComponent implements OnInit {
  isExpanded = false;

  public now: Date = new Date();

  constructor(public authService: AuthService, private router: Router) {
    // setInterval(() => {
    //   this.now = new Date();
    // }, 1);
  }

  ngOnInit(): void {}
  logout() {
    console.log("here");
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
}

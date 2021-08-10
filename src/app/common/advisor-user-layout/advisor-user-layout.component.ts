import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-advisor-user-layout",
  templateUrl: "./advisor-user-layout.component.html",
  styleUrls: ["./advisor-user-layout.component.scss"],
})
export class AdvisorUserLayoutComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
}

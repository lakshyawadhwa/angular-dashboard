import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DeviceDetectorService } from "ngx-device-detector";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-authorized-user-layout",
  templateUrl: "./authorized-user-layout.component.html",
  styleUrls: ["../styles/common-layout.component.scss"],
})
export class AuthorizedUserLayoutComponent implements OnInit {
  isExpanded = false;

  public now: Date = new Date();

  constructor(
    public authService: AuthService,
    private router: Router,
    public deviceService: DeviceDetectorService
  ) {}
  isMobile = this.deviceService.isMobile();

  ngOnInit(): void {
    window.addEventListener("storage", (event) => {
      if (event.key === "userInfo") {
        this.router.navigateByUrl("/login");
      }
    });
  }
  logout() {
    this.authService.logout("auth user layout");
    this.router.navigateByUrl("/login");
  }
}

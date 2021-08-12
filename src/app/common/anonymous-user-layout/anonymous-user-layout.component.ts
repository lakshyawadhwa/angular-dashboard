import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-anonymous-user-layout",
  templateUrl: "./anonymous-user-layout.component.html",
  styleUrls: ["./anonymous-user-layout.component.scss"],
})
export class AnonymousUserLayoutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    window.addEventListener("storage", (event) => {
      if (event.key === "userinfo") {
        this.router.navigateByUrl("/login");
      }
    });
  }
}

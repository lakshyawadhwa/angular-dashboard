import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./common/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let accountType = localStorage.getItem("accountType");
    let role = next.data.accountType;

    if (this.authService.isLoggedIn()) {
      if (role === accountType) {
        return this.authService.isLoggedIn();
      } else {
        if (accountType === "advisor") {
          this.router.navigate(["/advisor"]);
        } else if (accountType === "client") {
          this.router.navigate(["/client"]);
        }
      }
      return this.authService.isLoggedIn();
    } else {
      this.router.navigate(["/login"]);
    }
    return false;
  }
}

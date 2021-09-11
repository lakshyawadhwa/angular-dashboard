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
  accountType = localStorage.getItem("accountType");
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let role = next.data.accountType;
    if (this.authService.isLoggedIn()) {
      if (role === this.accountType) {
        return this.authService.isLoggedIn();
      } else {
        if (this.accountType === "advisor") {
          this.router.navigate(["/advisor"]);
        } else if (this.accountType === "client") {
          this.router.navigate(["/client"]);
        }
      }
      return this.authService.isLoggedIn();
    } else {
      this.authService.logout("auth-guard");
      this.router.navigate(["/login"]);
    }
    return false;
  }
}

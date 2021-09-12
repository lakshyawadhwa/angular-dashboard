import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as moment from "moment";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import APIConfig from "../services/APIConfig";
import { BaseService } from "../services/base-service/base.service";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient, private baseService: BaseService) {}

  login(loginReq: FormData, accountType: string): Observable<any> {
    let body = {
      password: loginReq.get("password"),
    };
    if (accountType === "client") {
      body["clientId"] = loginReq.get("username");
    } else if (accountType === "advisor") {
      body["advisorId"] = loginReq.get("username");
    }
    if (accountType === "client") {
      let url = environment.url + APIConfig.clientLogin;
      return this.baseService.post(url, body).pipe(
        tap(async (response) => {
          if (response) {
            this.setSession(response, accountType);
          }
        }),
        catchError((e) => {
          console.log(e);
          throw e;
        })
      );
    } else if (accountType === "advisor") {
      let url = environment.url + APIConfig.advisorLogin;
      return this.baseService.post(url, body).pipe(
        tap(async (response) => {
          if (response) {
            this.setSession(response, accountType);
          }
        }),
        catchError((e) => {
          console.log(e);
          throw e;
        })
      );
    }
  }
  setSession(authBody, accountType) {
    const expiresAt = moment().add(15, "m");
    localStorage.setItem(
      "loginExpiration",
      JSON.stringify(expiresAt.valueOf())
    );
    localStorage.setItem("userInfo", JSON.stringify(authBody));
    localStorage.setItem("accountType", accountType);
  }

  logout(callingfn) {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("loginExpiration");
    localStorage.removeItem("accountType");
    window.location.reload();
  }

  public isLoggedIn() {
    if (this.getUserFromStore()) {
      if (this.getExpiration()) {
        const currentTime = moment().valueOf();

        return moment(currentTime).isBefore(+this.getExpiration());
      } else {
        // this.logout();
      }
    }
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    return localStorage.getItem("loginExpiration");
  }

  getToken() {
    const userInfo = this.getUserFromStore();
    if (userInfo) {
      return userInfo.token;
    }
  }

  hasRole(role: string) {
    const userInfo = this.getUserFromStore();
    if (userInfo) {
      return userInfo.roles.includes(role);
    }
  }

  getUserFromStore() {
    // if (localStorage.getItem("userInfo") !== undefined) {
    return JSON.parse(JSON.stringify(localStorage.getItem("userInfo")));
    // }
  }
}

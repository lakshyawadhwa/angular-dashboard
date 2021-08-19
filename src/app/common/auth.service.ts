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

  login(loginReq: FormData, accountType): Observable<any> {
    let url = environment.url + APIConfig.clientLogin;
    let authBody;
    let body = {
      clientId: loginReq.get("username"),
      password: loginReq.get("password"),
    };
    if (accountType === "client") {
      return this.baseService.post(url, body).pipe(
        tap(async (response) => {
          if (response) {
            this.setSession(
              response,

              accountType
            );
          }
        }),
        catchError((e) => {
          console.log(e);
          throw e;
        })
      );
    } else if (accountType === "advisor") {
      if (
        loginReq.get("username") === "admin" &&
        loginReq.get("password") === "admin"
      ) {
        return new Observable<boolean>((observer) => {
          this.setSession(
            authBody,

            accountType
          );
          observer.next(true);
        });
      }
      return new Observable<boolean>((observer) => {
        observer.error(false);
      });
    }
  }
  setSession(authBody, accountType) {
    const expiresAt = moment().add(15, "m");

    let user = {
      clientId: -1,
      clientName: "admin",
      clientMobile: "9068622222",
      clientEmail: "admin@mahavastu.com",
      clientDisplayPic: "null",
      clientPOC: "clientPOC",
      occupation: {
        occupationId: 1,
        occupationName: "Advisor",
      },
      password: "password",
    };
    localStorage.setItem(
      "loginExpiration",
      JSON.stringify(expiresAt.valueOf())
    );
    if (accountType == "client") {
      localStorage.setItem("userinfo", JSON.stringify(authBody));
    } else if (accountType == "advisor") {
      localStorage.setItem("userinfo", JSON.stringify(user));
    }
  }

  logout(callingfn) {
    localStorage.removeItem("userinfo");
    localStorage.removeItem("loginExpiration");
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
    // if (localStorage.getItem("userinfo") !== undefined) {
    return JSON.parse(JSON.stringify(localStorage.getItem("userinfo")));
    // }
  }
}

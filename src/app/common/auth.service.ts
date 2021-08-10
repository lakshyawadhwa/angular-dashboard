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
          console.log("response: " + response);
          if (response) {
            this.setSession(
              response,
              {
                expiresIn: 24 * 60 * 60,
                id_token: "123",
              },
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
            {
              expiresIn: 24 * 60 * 60,
              id_token: "123",
            },
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
  setSession(authBody, authResult, accountType) {
    const expiresAt = moment().add(authResult["expiresIn"], "second");

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
    if (accountType === "client") {
      authBody["expires"] = expiresAt.valueOf();

      localStorage.setItem("userinfo", JSON.stringify(authBody));
    } else if (accountType == "advisor") {
      user["expires"] = expiresAt.valueOf();

      localStorage.setItem("userinfo", JSON.stringify(user));
    }
  }

  logout() {
    localStorage.removeItem("userinfo");
  }

  public isLoggedIn() {
    if (this.getExpiration())
      return moment().isSameOrBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const userInfo = this.getUserFromStore();
    if (userInfo) {
      const expiration = userInfo.expires;
      const expiresAt = expiration;
      return moment(expiresAt);
    }
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

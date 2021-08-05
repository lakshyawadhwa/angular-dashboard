import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as moment from "moment";
import { User } from "./model/user";
import { Observable } from "rxjs";
import * as jwt_decode from "jwt-decode";
import { apiUrl } from "../services/env";
import APIConfig from "../services/APIConfig";
import { BaseService } from "../services/base-service/base.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  apiUrl = "http://localhost:9015";

  constructor(private http: HttpClient, private baseService: BaseService) {}

  login(loginReq: FormData): Observable<any> {
    // return this.http
    //   .post(this.apiUrl + '/login', loginReq,{observe: 'response'});
    let url = apiUrl + APIConfig.clientLogin;
    let authBody;
    let body = {
      clientId: 8,
      password: "password",
    };
    this.baseService.post(url, body).subscribe((res) => {
      authBody = res;
    });
    if (
      loginReq.get("username") === "admin" &&
      loginReq.get("password") === "admin"
    ) {
      return new Observable<boolean>((observer) => {
        this.setSession(authBody, { expiresIn: 24 * 60 * 60, id_token: "123" });
        observer.next(true);
      });
    }
    return new Observable<boolean>((observer) => {
      observer.error(false);
    });
  }

  // setSession(authResult) {
  //   const token = authResult.headers.get('CMS-TOKEN');
  //   const decoded = jwt_decode(token);
  //   console.log(decoded);
  //   const expiresAt = moment().add(decoded['exp'], 'second');
  //   var userInfo = {user:decoded['sub'],token, expires: JSON.stringify(expiresAt.valueOf()), roles: decoded['role']};
  //   localStorage.setItem('userinfo', JSON.stringify(userInfo));
  // }

  setSession(authBody, authResult) {
    const expiresAt = moment().add(authResult["expiresIn"], "second");

    let user = {
      clientId: null,
      clientName: "OJ",
      clientMobile: "9068622222",
      clientEmail: "1@gmail.com",
      clientDisplayPic: "client",
      clientPOC: "clientPOC",
      occupation: {
        occupationId: 1,
        occupationName: null,
      },
      password: "password",
      expires: JSON.stringify(expiresAt.valueOf()),
    };
    localStorage.setItem("userinfo", JSON.stringify(authBody));
  }

  logout() {
    localStorage.removeItem("userinfo");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const userInfo = this.getUserFromStore();
    if (userInfo) {
      const expiration = userInfo.expires;
      const expiresAt = JSON.parse(expiration);
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
    return JSON.parse(localStorage.getItem("userinfo"));
  }
}

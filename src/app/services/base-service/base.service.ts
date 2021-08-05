import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class BaseService {
  constructor(public httpClient: HttpClient) {}

  get(url: string): Observable<any> {
    return this.httpClient.get(url).pipe(
      tap((res) => {}),
      catchError((e) => {
        this.processError(e);
        throw e;
      })
    );
  }

  getWithParams(url: string, param): Observable<any> {
    return this.httpClient.get(url, param).pipe(
      tap((res) => {}),
      catchError((e) => {
        this.processError(e);
        throw e;
      })
    );
  }

  post(url, params): Observable<any> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("client", "bridge_web");
    return this.httpClient
      .post(`${url}`, JSON.stringify(params), {
        headers,
      })
      .pipe(
        tap(async (res) => {}),
        catchError((e) => {
          this.processError(e);
          throw e;
        })
      );
  }

  put(url, params): Observable<any> {
    return this.httpClient.put(`${url}`, params).pipe(
      tap(async (res) => {}),
      catchError((e) => {
        this.processError(e);
        throw e;
      })
    );
  }

  processError(e) {
    if (e.status === 401) {
      //window.location.href = "/session-expired";
    }
  }
}

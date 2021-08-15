import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { SnackbarInterface } from "../interfaces";

@Injectable({
  providedIn: "root",
})
export class BaseService {
  constructor(public httpClient: HttpClient) {}
  callSnackbar = new BehaviorSubject({} as SnackbarInterface);

  get(url: string): Observable<any> {
    return this.httpClient.get(url).pipe(
      tap((res) => {}),
      catchError((e) => {
        this.processError(e);
        throw e;
      })
    );
  }
  getFile(url: string): Observable<any> {
    let headerOptions = new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/pdf",
      //   'Accept': 'application/octet-stream', // for excel file
    });
    let requestOptions = {
      headers: headerOptions,
      responseType: "blob" as "blob",
    };
    return this.httpClient.get(url, requestOptions).pipe(
      tap((data: any) => {
        let blob = new Blob([data], {
          type: "application/pdf", // must match the Accept type
          // type: 'application/octet-stream' // for excel
        });
        var link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        // link.download = 'samplePDFFile.pdf';
        link.target = "_blank";
        link.click();
        window.URL.revokeObjectURL(link.href);
      }),
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
    const headers = new HttpHeaders().set("Content-Type", "application/json");
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
  postFile(url, params): Observable<any> {
    return this.httpClient
      .post(`${url}`, params, { responseType: "text" })
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

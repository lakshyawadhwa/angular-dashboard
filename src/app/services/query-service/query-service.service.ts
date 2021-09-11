import { BaseService } from "./../base-service/base.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {
  AdviceMetadata,
  clientObject,
  masterConcern,
  UserQuery,
} from "../interfaces";
import { environment } from "src/environments/environment";
import APIConfig from "../APIConfig";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class QueryService {
  constructor(private baseService: BaseService) {}
  clientInfo: clientObject = JSON.parse(localStorage.getItem("userInfo"));

  getClientQueries(): Observable<Array<UserQuery>> {
    let url =
      environment.url + APIConfig.getClientQueries + this.clientInfo.clientId;
    return this.baseService.get(url).pipe(
      tap(async (res: Array<UserQuery>) => {
        // console.log("Assigning Queries: " + res);
        // this.queryArray = res;
      }),
      catchError((e) => {
        console.log(e);
        throw e;
      })
    );
  }
  getAllQueries(): Observable<Array<UserQuery>> {
    let url = environment.url + APIConfig.getAllQueries;
    return this.baseService.get(url).pipe(
      tap(async (res: Array<UserQuery>) => {
        // console.log("Assigning Queries: " + res);
        // this.queryArray = res;
      }),
      catchError((e) => {
        console.log(e);
        throw e;
      })
    );
  }
  getQueriesBySite(siteId): Observable<Array<UserQuery>> {
    let url = environment.url + APIConfig.getQueriesBySite + siteId;
    return this.baseService.get(url).pipe(
      tap(async (res: Array<UserQuery>) => {
        // console.log("Assigning Queries: " + res);
        // this.queryArray = res;
      }),
      catchError((e) => {
        console.log(e);
        throw e;
      })
    );
  }
  getMasterConcerns(): Observable<Array<masterConcern>> {
    let url = environment.url + APIConfig.masterConcerns;
    return this.baseService.get(url).pipe(
      tap(async (res: Array<masterConcern>) => {}),
      catchError((e) => {
        console.log(e);
        throw e;
      })
    );
  }

  resolveQuery(body) {
    let url = environment.url + APIConfig.resolveQuery + body["advisorId"];
    return this.baseService.postFile(url, body).pipe(
      tap(async (res) => {
        this.baseService.callSnackbar.next({
          message: res,
          type: "success",
        });
      }),
      catchError((e) => {
        console.log(e);
        throw e;
      })
    );
  }

  getAdviceForQuery(queryId): Observable<Array<AdviceMetadata>> {
    let url = environment.url + APIConfig.getAdviceMetadata + queryId;
    return this.baseService.get(url).pipe(
      tap(async (res: Array<AdviceMetadata>) => {}),
      catchError((e) => {
        console.log(e);
        throw e;
      })
    );
  }
}

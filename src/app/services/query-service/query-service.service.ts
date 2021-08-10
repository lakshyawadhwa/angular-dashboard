import { BaseService } from "./../base-service/base.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { clientObject, UserQuery } from "../interfaces";
import { apiUrl } from "../env";
import APIConfig from "../APIConfig";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class QueryService {
  constructor(private baseService: BaseService) {}
  clientInfo: clientObject = JSON.parse(localStorage.getItem("userinfo"));

  getAllQueries(): Observable<Array<UserQuery>> {
    let url = apiUrl + APIConfig.getClientQueries + this.clientInfo.clientId;
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
}

import { Observable } from "rxjs";
import { BaseService } from "./../base-service/base.service";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import APIConfig from "../APIConfig";
import { clientObject, clientOccupation } from "../interfaces";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  constructor(private baseService: BaseService) {}
  getOccupations(): Observable<Array<clientOccupation>> {
    return this.baseService
      .get(environment.url + APIConfig.clientOccupations)
      .pipe(tap(async (res) => {}));
  }
  postClient(body: clientObject): Observable<clientObject> {
    return this.baseService
      .post(environment.url + APIConfig.createClient, body)
      .pipe(tap(async (res) => {}));
  }
  updateClient(body: clientObject): Observable<clientObject> {
    return this.baseService
      .put(environment.url + APIConfig.createClient, body)
      .pipe(tap(async (res) => {}));
  }
  forgotPassword(body): Observable<string> {
    return this.baseService
      .postFile(environment.url + APIConfig.forgotPassword, body)
      .pipe(tap(async (res) => {}));
  }
}

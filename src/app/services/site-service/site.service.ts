import { BaseService } from "./../base-service/base.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { SiteInterface } from "../interfaces";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import APIConfig from "../APIConfig";

@Injectable({
  providedIn: "root",
})
export class SiteService {
  constructor(private baseService: BaseService) {}
  getSiteById(id: number): Observable<SiteInterface> {
    return this.baseService
      .get(environment.url + APIConfig.getSiteById + id)
      .pipe(tap(async (res) => {}));
  }
  getAllSites(): Observable<Array<SiteInterface>> {
    return this.baseService
      .get(environment.url + APIConfig.getAllSites)
      .pipe(tap(async (res) => {}));
  }
}

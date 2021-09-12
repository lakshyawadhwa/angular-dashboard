import { BaseService } from "./../base-service/base.service";
import { BehaviorSubject, Observable } from "rxjs";
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
  loadNewSites = new BehaviorSubject(null as Array<SiteInterface>);

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
  searchSites(body): Observable<Array<SiteInterface>> {
    return this.baseService
      .post(environment.url + APIConfig.searchSites, body)
      .pipe(
        tap(async (res) => {
          this.loadNewSites.next(res);
        })
      );
  }
}

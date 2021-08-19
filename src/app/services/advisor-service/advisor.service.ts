import { BaseService } from "./../base-service/base.service";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import APIConfig from "../APIConfig";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AdvisorService {
  constructor(private baseService: BaseService) {}
  advisorForm = new BehaviorSubject({} as object);
  generateReport(queryId): Observable<any> {
    return this.baseService
      .getFile(environment.url + APIConfig.generateReport + queryId)
      .pipe(tap(async (res) => {}));
  }
  sendReport(queryId): Observable<any> {
    return this.baseService
      .getFile(environment.url + APIConfig.generateReport + queryId)
      .pipe(tap(async (res) => {}));
  }
}

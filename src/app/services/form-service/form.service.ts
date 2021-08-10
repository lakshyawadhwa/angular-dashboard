import { BaseService } from "./../base-service/base.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { apiUrl } from "../env";
import APIConfig from "../APIConfig";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class FormService {
  constructor(private baseService: BaseService) {}
  postForm(body): Observable<any> {
    let url = apiUrl + APIConfig.postForm;
    return this.baseService.post(url, body).pipe(tap(async (res) => {}));
  }
}

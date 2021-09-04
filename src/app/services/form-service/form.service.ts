import { BaseService } from "./../base-service/base.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import APIConfig from "../APIConfig";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class FormService {
  constructor(private baseService: BaseService) {}
  getZoneArray() {
    return [
      { heading: "NE", subheading: "Motivation" },
      { heading: "ENE", subheading: "Happiness" },
      { heading: "EAST", subheading: "Networking" },
      { heading: "ESE", subheading: "Overthinking" },
      { heading: "SE", subheading: "Money" },
      { heading: "SSE", subheading: "Confidence" },
      { heading: "SOUTH", subheading: "Fame" },
      { heading: "SSW", subheading: "Disposal" },
      { heading: "SW", subheading: "Relationship" },
      { heading: "WSW", subheading: "Studies" },
      { heading: "WEST", subheading: "Gains" },
      { heading: "WNW", subheading: "Depression" },
      { heading: "NW", subheading: "Support" },
      { heading: "NNW", subheading: "Sensuality" },
      { heading: "NORTH", subheading: "Customer" },
      { heading: "NNE", subheading: "Immunity" },
    ];
  }
  postForm(body): Observable<any> {
    let clientInfo = JSON.parse(localStorage.getItem("userInfo"));
    let url = environment.url + APIConfig.postForm + `/${clientInfo.advisorId}`;
    return this.baseService.post(url, body).pipe(tap(async (res) => {}));
  }
  getForm(queryId, siteId, level): Observable<any> {
    let url =
      environment.url + APIConfig.getForms + `${queryId}/${siteId}/${level}`;
    console.log(url);

    return this.baseService.get(url).pipe(tap(async (res) => {}));
  }
}

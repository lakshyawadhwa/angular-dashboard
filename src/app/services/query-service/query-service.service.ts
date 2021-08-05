import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class QueryService {
  constructor() {}
}
export interface UserQuery {
  queryID: number;
  clientId: number;
  horoscopeID: number;
  queryText: string;
  createdTime: Date;
  siteID: number;
}

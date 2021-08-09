import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AdvisorService {
  constructor() {}

  advisorForm = new BehaviorSubject({} as object);
}

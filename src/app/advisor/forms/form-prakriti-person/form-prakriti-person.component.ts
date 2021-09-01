import { FormService } from "./../../../services/form-service/form.service";
import { AdvisorService } from "./../../../services/advisor-service/advisor.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  AdviceResponse,
  SiteInterface,
  UserQuery,
} from "src/app/services/interfaces";

@Component({
  selector: "app-form-prakriti-person",
  templateUrl: "./form-prakriti-person.component.html",
  styleUrls: ["./form-prakriti-person.component.scss"],
})
export class FormPrakritiPersonComponent implements OnInit {
  constructor(
    private advisorService: AdvisorService,
    private formService: FormService,
    private router: Router
  ) {}
  headingArray = ["Zone", "Person's Activity", "Suggestion"];
  query: UserQuery;
  siteDetails: SiteInterface;
  postMessage: string;
  zoneArray = this.formService.getZoneArray();
  activity = ["Bedroom", "Personal Belongings", "Office /Work Area"];
  formResponses: Array<AdviceResponse> = [];
  responseArray = [];
  personPrakriti: string;
  clientInfo = JSON.parse(localStorage.getItem("userInfo"));
  ngOnInit(): void {
    this.advisorService.advisorForm.subscribe((res: any) => {
      if (res.query && res.siteDetails) {
        this.query = res.query;
        this.siteDetails = res.siteDetails;
      } else {
        this.router.navigateByUrl("/advisor/queries");
      }
    });
    this.formService
      .getForm(
        this.query.queryId,
        this.siteDetails.siteId,
        "LEVEL_1_B_PRAKRITI_OF_PERSON"
      )
      .subscribe((res) => {
        this.formResponses = res;
      });
  }
  submitForm() {
    this.responseArray.map((response) => {
      response["level"] = "LEVEL_1_B_PRAKRITI_OF_PERSON";
      response["userQuery"] = this.query;
    });
    this.formService.postForm(this.responseArray).subscribe((res) => {
      this.postMessage = res.message;
      document.getElementsByTagName("mat-drawer-content")[0].scrollTo(0, 0);
    });
  }
  getValue(name, zone) {
    const field = this.formResponses.find(
      (field) => field.zone === zone.heading
    );
    if (field) {
      return field[name];
    }
  }

  handleInput(heading, event) {
    var result = this.responseArray.find((obj) => {
      return obj.zone === heading;
    });
    let propertyName = event.target.name;
    let value = event.target.value;
    if (result) {
      result[propertyName] = value;
      let index = this.responseArray.indexOf(result);
      this.responseArray[index] = result;
    } else {
      let newObject = {
        zone: heading,
      };
      newObject[propertyName] = value;
      this.responseArray.push(newObject);
    }
  }
}

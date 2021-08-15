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
  selector: "app-form-intuitive",
  templateUrl: "./form-intuitive.component.html",
  styleUrls: ["./form-intuitive.component.scss"],
})
export class FormIntuitiveComponent implements OnInit {
  constructor(
    private advisorService: AdvisorService,
    private formService: FormService,
    private router: Router
  ) {}
  headingArray = ["Concerns", "Intiutive Diagnosis", "Suggestions"];
  query: UserQuery;
  siteDetails: SiteInterface;
  postMessage: string;
  zoneArray = Array(16)
    .fill(1)
    .map((x, i) => i);

  formResponses: Array<AdviceResponse> = [];
  responseArray = [];
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
        "LEVEL_1_K_INTUITIVE"
      )
      .subscribe((res) => {
        this.formResponses = res;
      });
  }
  submitForm() {
    this.responseArray.map((response) => {
      response["level"] = "LEVEL_1_K_INTUITIVE";
      response["userQuery"] = this.query;
    });
    this.formService.postForm(this.responseArray).subscribe((res) => {
      this.postMessage = res.message;
      document.getElementsByTagName("mat-drawer-content")[0].scrollTo(0, 0);
    });
  }
  getValue(name, zone) {
    console.log(this.formResponses);
    const field = this.formResponses.find(
      (field) => field.zone === zone.heading
    );
    console.log(name, zone, field);
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

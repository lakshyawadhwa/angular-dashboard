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
  selector: "app-form-devta-two",
  templateUrl: "./form-devta-two.component.html",
  styleUrls: ["./form-devta-two.component.scss"],
})
export class FormDevtaTwoComponent implements OnInit {
  constructor(
    private advisorService: AdvisorService,
    private formService: FormService,
    private router: Router
  ) {}
  headingArray = [
    "Zone",
    "32 outer Devta",
    "Devta-II (Outer Devta)",
    "Evaluation(Dev, Asur Polarity / Strength/ )",
    "Suggestions",
  ];
  query: UserQuery;
  siteDetails: SiteInterface;
  postMessage: string;
  zoneArray = this.formService.getZoneArray();

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
      .getForm(this.query.queryId, this.siteDetails.siteId, "LEVEL_1_J_DEVTA_2")
      .subscribe((res) => {
        this.formResponses = res;
      });
  }
  submitForm() {
    this.responseArray.map((response) => {
      response["level"] = "LEVEL_1_J_DEVTA_2";
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

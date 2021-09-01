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
  selector: "app-form-astro-audit-three",
  templateUrl: "./form-astro-audit-three.component.html",
  styleUrls: ["./form-astro-audit-three.component.scss"],
})
export class FormAstroAuditThreeComponent implements OnInit {
  constructor(
    private advisorService: AdvisorService,
    private formService: FormService,
    private router: Router
  ) {}
  headingArray = [
    "Boxes",
    "Sign",
    "MV Directions",
    "Activity",
    "Utility",
    "Evaluation",
    "Suggestions",
  ];
  query: UserQuery;
  siteDetails: SiteInterface;
  postMessage: string;
  boxArray = [
    "Vision Manifestation",
    "Money",
    "Performance",
    "Learning",
    "Solution",
    "Service",
    "Interaction",
    "Problems",
    "Fortune",
    "Top position",
    "Achievements",
    "Spendings",
  ];
  boxActivityArray = [
    "B1: Personal working & belongings.",
    "B2:Sitting with family",
    "B3:Presenting & Formal Meetings",
    "B4:Building front and facing",
    "B5: Play and Hobby Area.",
    "B6: Serving Area",
    "B7: Public Interaction, Assisting Staff",
    "B8: Stuff to be kept behind curtains.",
    "B9:Area to meditate, Reinstating.",
    "B10: Excel and Grow, Next Floors.",
    "B11: Leisure, sitting with friends and Party.",
    "B12: Foreign travel, Accessories, Market Procurement & Excess purchase",
  ];
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
        "LEVEL_1_I_ASTRO_AUDIT_3"
      )
      .subscribe((res) => {
        this.formResponses = res;
      });
  }
  submitForm() {
    this.responseArray.map((response) => {
      response["level"] = "LEVEL_1_I_ASTRO_AUDIT_3";
      response["userQuery"] = this.query;
    });
    this.formService.postForm(this.responseArray).subscribe((res) => {
      this.postMessage = res.message;
      document.getElementsByTagName("mat-drawer-content")[0].scrollTo(0, 0);
    });
  }
  getValue(name, zone) {
    const field = this.formResponses.find((field) => field.zone === zone);
    if (field) return field[name];
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

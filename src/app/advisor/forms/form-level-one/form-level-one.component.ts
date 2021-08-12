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
  selector: "app-form-level-one",
  templateUrl: "./form-level-one.component.html",
  styleUrls: ["./form-level-one.component.scss"],
})
export class FormLevelOneComponent implements OnInit {
  constructor(
    private advisorService: AdvisorService,
    private formService: FormService,
    private router: Router
  ) {}
  headingArray = [
    "Zone",
    "Entrance",
    "Type of Entrance",
    "Evaluation",
    "Suggestions",
  ];
  query: UserQuery;
  siteDetails: SiteInterface;
  postMessage: string;
  zoneArray = [
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
  formResponses: Array<AdviceResponse> = [];
  responseArray = [];
  statusArray = ["Balanced", "Exhausted", "Enhanced"];
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
        "LEVEL_1_A_ENTRANCE"
      )
      .subscribe((res) => {
        this.formResponses = res;
      });
  }
  submitForm() {
    this.responseArray.map((response) => {
      response["level"] = "LEVEL_1_A_ENTRANCE";
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

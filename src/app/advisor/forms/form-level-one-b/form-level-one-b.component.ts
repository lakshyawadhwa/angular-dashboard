import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AdvisorService } from "src/app/services/advisor-service/advisor.service";
import { FormService } from "src/app/services/form-service/form.service";
import { SiteInterface, UserQuery } from "src/app/services/interfaces";

@Component({
  selector: "app-form-level-one-b",
  templateUrl: "./form-level-one-b.component.html",
  styleUrls: ["./form-level-one-b.component.scss"],
})
export class FormLevelOneBComponent implements OnInit {
  constructor(
    private advisorService: AdvisorService,
    private formService: FormService,
    private router: Router
  ) {}

  headingArray = ["Zone", "Dishabal", "Status", "Evaluation", "Suggestions"];
  query: UserQuery;
  siteDetails: SiteInterface;
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
  responseArray = [];
  statusArray = ["Balanced", "Exhausted", "Enhanced"];
  postMessage: string;
  ngOnInit(): void {
    this.advisorService.advisorForm.subscribe((res: any) => {
      if (res.query && res.siteDetails) {
        this.query = res.query;
        this.siteDetails = res.siteDetails;
      } else {
        this.router.navigateByUrl("/advisor/queries");
      }
    });
  }
  submitForm() {
    this.responseArray.map((response) => {
      response["level"] = "LEVEL_1_B_DISHA_BAL";
      response["userQuery"] = this.query;
    });
    console.log("ResponseArray: " + this.responseArray);
    this.formService.postForm(this.responseArray).subscribe((res) => {
      this.postMessage = res.message;
    });
  }
  handleInput(heading, event) {
    console.log(heading, event);
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

    console.log(this.responseArray);
  }
}

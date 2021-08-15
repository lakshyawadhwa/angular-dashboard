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
  selector: "app-form-astro-audit-one",
  templateUrl: "./form-astro-audit-one.component.html",
  styleUrls: ["./form-astro-audit-one.component.scss"],
})
export class FormAstroAuditOneComponent implements OnInit {
  constructor(
    private advisorService: AdvisorService,
    private formService: FormService,
    private router: Router
  ) {}
  headingArray = [
    "Boxes",
    "Sign",
    "Lord Positioning",
    "Influence (Hits Analysis on Box)",
    "Best Approach (Rashi.Box)",
    "Evaluation",
    "Suggestions",
  ];
  query: UserQuery;
  siteDetails: SiteInterface;
  postMessage: string;
  boxArray = [
    "Power of Manifestation",
    "Money Potential",
    "Effective Performance",
    "Essential Learning",
    "Effective Solutions",
    "Service & deliverables",
    "Fruitful Interaction",
    "Problems",
    "Fortune",
    "Top position & growth",
    "Achievements",
    "Spendings",
  ];
  formResponses: Array<AdviceResponse> = [];
  responseArray = [];
  rashiArray = [
    { sign: "Aries", description: "Resolve and Safety" },
    { sign: "Taurus", description: "Consistent, Process" },
    { sign: "Gemini", description: "Pairs, Networking" },
    { sign: "Cancer", description: "Intuitive, Care" },
    { sign: "Leo", description: "Compliances, Reinstating system" },
    { sign: "Virgo", description: "Organising, Packaging" },
    { sign: "Libra", description: "Balance, Weighing" },
    { sign: "Scorpio", description: "Layout, Planning" },
    { sign: "Sagitarius", description: "What to do, Setting Goals" },
    { sign: "Capricorn", description: "Strategy and Structuring" },
    { sign: "Aquarius", description: "Welfare, Humanitanian" },
    { sign: "Pisces", description: "Meaningful Search" },
  ];
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
        "LEVEL_1_I_ASTRO_AUDIT_1"
      )
      .subscribe((res) => {
        this.formResponses = res;
      });
  }
  submitForm() {
    this.responseArray.map((response) => {
      response["level"] = "LEVEL_1_I_ASTRO_AUDIT_1";
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

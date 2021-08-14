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
  selector: "app-form-marma",
  templateUrl: "./form-marma.component.html",
  styleUrls: ["./form-marma.component.scss"],
})
export class FormMarmaComponent implements OnInit {
  constructor(
    private advisorService: AdvisorService,
    private formService: FormService,
    private router: Router
  ) {}
  headingArray = ["Zone", "Marma", "Evaluation", "Suggestion"];
  query: UserQuery;
  siteDetails: SiteInterface;
  postMessage: string;
  zoneArray = this.formService.getZoneArray();
  formResponses: Array<AdviceResponse> = [];
  responseArray = [];
  checklistArray = [
    "i Head Top",
    "ii Third Eye",
    "iii. 2L Side Temple",
    "iv. 2R Side Temple",
    "v.Medulla",
    "vi. 3L Left Ear",
    "vii. 3R Right Ear",
    "viii. 4. Neck Joint C1- C4",
    "ix. 5-6 Trachea C5 - C7",
    "x. 5L Left Shoulder",
    "xi. 5R Right Shoulder",
    "xii. 7-8 Heart",
    "xiii. 7L - 8L Right Lung",
    "xiv. 8LW Left Wrist",
    "xv. 8RW Right Wrist ",
    "xvi. 9 Navel",
    "xvii. 9L Stomach + Spleen",
    "xviii. 9R Liver + Gall Bladder",
    "xix. 9LE Left Elbow",
    "xx. 9RR Right Elbow  ",
    "xxi. 10. Bladder  ",
    "xxii. 10L Left Kidney ",
    "xxxi.  15 Ankle Heel",
    "xxxiii. 15R Right Ankle ",
    "xxxv. Toe",
    "xxiii. 10R Right Kidney",
    " xxiv. 10LT Left Thigh",
    "xxv. 10 RT Right Thigh",
    "xxvi. 10LN Left Knee",
    "xxvii. 10RN Right Knee",
    "xxviii. 11-12 Reproductive",
    "xxix. 13 Excretory",
    "xxx. 14 Tail Bone",
    "xxxii. 15L Left Ankle",
    "xxxiv. 16 Arch",
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
        "LEVEL_1_E_ACTIVITY"
      )
      .subscribe((res) => {
        this.formResponses = res;
      });
  }
  submitForm() {
    this.responseArray.map((response) => {
      response["level"] = "LEVEL_1_E_ACTIVITY";
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

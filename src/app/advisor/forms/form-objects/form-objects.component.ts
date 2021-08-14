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
  selector: "app-form-objects",
  templateUrl: "./form-objects.component.html",
  styleUrls: ["./form-objects.component.scss"],
})
export class FormObjectsComponent implements OnInit {
  constructor(
    private advisorService: AdvisorService,
    private formService: FormService,
    private router: Router
  ) {}
  headingArray = ["Zone", "Objects", "Evaluation", "Suggestion"];
  query: UserQuery;
  siteDetails: SiteInterface;
  postMessage: string;
  zoneArray = this.formService.getZoneArray();
  formResponses: Array<AdviceResponse> = [];
  responseArray = [];
  objectsArray = [
    "Curtain",
    "Inverter",
    "Fuse Box",
    "God Idols",
    "Cushion",
    "Sofa",
    "Carpet / Rugs",
    "Scrap",
    "Wifi",
    "Wall Clock",
    "Mixie",
    "Pots -sand filled",
    "Sculpture",
    "Electric Meter",
    "Plants & Flowers",
    "Lights",
    "Statue / Figurine",
    "TV",
    "AC Unit",
    "Exhaust Fan",
    "CCTV",
    "Computer",
    "Painting",
    "Dustbin",
    "Generator",
    "Safe",
    "W/M",
    "Music System",
    "Grinder",
    "Clother Dryer",
    "Sewing M/c",
    "Dish Washer",
    "Study Table",
    "Family Photo",
    "Ancestors Pic",
    "Bed",
    "Tools",
    "V.Door Bell",
    "Musical Instrument",
    "Refrigerator",
    "Air Purifier",
    "Bedsheet",
    "Gas Cylinder",
    "Wall Art",
    "Aquarium",
    "Medicines",
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

import { siteTypeInterface } from "./../../services/interfaces";
import { BaseService } from "./../../services/base-service/base.service";
import { Component, Inject, Input, OnInit } from "@angular/core";
import { Form, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import {
  clientObject,
  SiteInterface,
  UserQuery,
} from "src/app/services/interfaces";
import { environment } from "src/environments/environment";
import APIConfig from "src/app/services/APIConfig";

@Component({
  selector: "app-site-view",
  templateUrl: "./site-view.component.html",
  styleUrls: ["./site-view.component.scss"],
})
export class SiteViewComponent implements OnInit {
  // queryView: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private baseService: BaseService,
    private dialogRef: MatDialogRef<SiteViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SiteInterface
  ) {}
  editDisable = true;
  clientInfo: clientObject = JSON.parse(localStorage.getItem("userInfo"));
  siteTypes: Array<siteTypeInterface> = JSON.parse(
    localStorage.getItem("siteTypes")
  );
  formControl: FormControl;
  conditionsArray: Array<string> = ["New", "Used"];
  selectedSiteType: string;
  ngOnInit(): void {
    if (!this.siteTypes) this.getSiteTypes();
    console.log(this.data.siteType);
    this.selectedSiteType = this.data.siteType.siteTypeName;
    console.log(this.selectedSiteType);
  }
  getSiteTypes() {
    let url = environment.url + APIConfig.siteTypes;
    this.baseService.get(url).subscribe((res) => {
      localStorage.setItem("siteTypes", JSON.stringify(res));
      this.siteTypes = res;
    });
  }
  setSiteType(siteType) {
    console.log(siteType);
    console.log(JSON.parse(JSON.stringify(siteType)));
    this.data.siteType = {
      siteTypeId: this.getSelectedSite(siteType).siteTypeId,
    };
  }
  enableEdit() {
    this.editDisable = !this.editDisable;
  }
  editSite() {
    let url = environment.url + APIConfig.createNewSite;

    let body: any = this.data;
    body["client"] = { clientId: this.clientInfo.clientId };
    body["siteType"];
    this.baseService.put(url, this.data).subscribe((res) => {
      console.log(res);
      this.dialogRef.close();
    });
  }
  getSelectedSite(siteType) {
    return this.siteTypes.find((site) => site.siteTypeName === siteType);
  }
}

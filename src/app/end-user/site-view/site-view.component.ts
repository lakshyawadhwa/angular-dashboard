import { BaseService } from "./../../services/base-service/base.service";
import { Component, Inject, Input, OnInit } from "@angular/core";
import { Form, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import {
  clientObject,
  SiteInterface,
  UserQuery,
} from "src/app/services/interfaces";
import { apiUrl } from "src/app/services/env";
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
  clientInfo: clientObject = JSON.parse(localStorage.getItem("userinfo"));

  formControl: FormControl;

  ngOnInit(): void {
    console.log(this.data);
  }
  enableEdit() {
    this.editDisable = !this.editDisable;
  }
  editSite() {
    let url = apiUrl + APIConfig.createNewSite;

    let body: any = this.data;
    body["client"] = { clientId: this.clientInfo.clientId };
    this.baseService.put(url, this.data).subscribe((res) => {
      console.log(res);
      this.dialogRef.close();
    });
  }
}

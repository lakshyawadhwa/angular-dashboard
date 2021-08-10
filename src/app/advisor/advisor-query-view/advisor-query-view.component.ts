import { Component, Inject, Input, OnInit } from "@angular/core";
import { Form, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { UserQuery } from "src/app/services/interfaces";
import * as moment from "moment";
import { Router } from "@angular/router";
@Component({
  selector: "app-advisor-query-view",
  templateUrl: "./advisor-query-view.component.html",
  styleUrls: ["./advisor-query-view.component.scss"],
})
export class AdvisorQueryViewComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  showForms = [false, false, false, false, false, false];
  @Input() selectedQuery: UserQuery;
  formControl: FormControl;
  queryView: FormGroup = new FormGroup({});
  ngOnInit(): void {
    console.log(this.data);
  }
  getDate() {
    return moment(this.data.query.queryUpdateDatetime).format("DD-MM-YY HH:mm");
  }
  toggleShowForm(index) {
    this.showForms[index] = !this.showForms[index];
  }
  triggerForm(url) {
    this.router.navigateByUrl(`/advisor/${url}`);
  }
}

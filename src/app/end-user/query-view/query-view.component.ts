import { Component, Inject, Input, OnInit } from "@angular/core";
import { Form, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { UserQuery } from "src/app/services/interfaces";
import * as moment from "moment";
@Component({
  selector: "app-query-view",
  templateUrl: "./query-view.component.html",
  styleUrls: ["./query-view.component.scss"],
})
export class QueryViewComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  @Input() selectedQuery: UserQuery;
  formControl: FormControl;
  queryView: FormGroup = new FormGroup({});
  uploadMapArray = [
    { name: "PartLayout", title: "Part Layout" },
    { name: "GradedMap", title: "Graded Map" },
    { name: "SquareGridMap", title: "Square Grid Map" },
  ];
  ngOnInit(): void {
    console.log(this.data);
  }
  getDate() {
    return moment(this.data.query.queryUpdateDatetime).format("DD-MM-YY HH:mm");
  }
}

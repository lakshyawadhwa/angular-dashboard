import { QueryService } from "src/app/services/query-service/query-service.service";
import { AdvisorService } from "./../../services/advisor-service/advisor.service";
import { Component, Inject, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AdviceMetadata, UserQuery } from "src/app/services/interfaces";
import * as moment from "moment";
import { Router } from "@angular/router";
@Component({
  selector: "app-advisor-query-view",
  templateUrl: "./advisor-query-view.component.html",
  styleUrls: ["./advisor-query-view.component.scss"],
})
export class AdvisorQueryViewComponent implements OnInit {
  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<AdvisorQueryViewComponent>,
    private advisorService: AdvisorService,
    private queryService: QueryService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  showForms = [false, false, false, false, false, false];
  uploadMapArray = [
    { name: "PartLayout", title: "Part Layout" },
    { name: "GradedMap", title: "Graded Map" },
    { name: "SquareGridMap", title: "Square Grid Map" },
    { name: "AssociatedPeople", title: "Associated People" },
  ];
  adviceMetadata: Array<AdviceMetadata>;
  @Input() selectedQuery: UserQuery;
  formControl: FormControl;
  queryView: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.queryService
      .getAdviceForQuery(this.data.query.queryId)
      .subscribe((res) => (this.adviceMetadata = res));
  }
  getDate(time) {
    return moment(time).format("DD-MM-YY HH:mm");
  }
  toggleShowForm(index) {
    this.showForms.map((form) => form === false);
    this.showForms[index] = true;
  }
  triggerForm(url) {
    this.router.navigateByUrl(`/advisor/${url}`);
    this.dialogRef.close();
  }
  generateReport() {
    this.advisorService
      .generateReport(this.data.query.queryId)
      .subscribe((res) => {
        console.log(res);
      });
  }
  sendReport() {
    this.advisorService.sendReport(this.data.query.queryId).subscribe((res) => {
      console.log(res);
    });
  }
}

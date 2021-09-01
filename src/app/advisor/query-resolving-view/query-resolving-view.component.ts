import { QueryService } from "./../../services/query-service/query-service.service";
import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { advisorObject } from "src/app/services/interfaces";

@Component({
  selector: "app-query-resolving-view",
  templateUrl: "./query-resolving-view.component.html",
  styleUrls: ["./query-resolving-view.component.scss"],
})
export class QueryResolvingViewComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private queryService: QueryService,
    private dialogRef: MatDialogRef<QueryResolvingViewComponent>
  ) {}
  resolutionNotes: string;
  queryView;
  advisorData: advisorObject = JSON.parse(localStorage.getItem("userInfo"));
  ngOnInit(): void {}
  onSubmit() {
    this.queryService
      .resolveQuery({
        queryId: this.data,
        resolveText: this.resolutionNotes,
        advisorId: this.advisorData.advisorId,
      })
      .subscribe((res) => {});
  }
}

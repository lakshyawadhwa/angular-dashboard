import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
// import { UserQueriesComponent } from "../user-queries/user-queries.component";

@Component({
  selector: "app-user-new-query-dialog",
  templateUrl: "./user-new-query-dialog.component.html",
  styleUrls: ["./user-new-query-dialog.component.scss"],
})
export class UserNewQueryDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<UserNewQueryDialogComponent> // @Inject(MAT_DIALOG_DATA) public data: UserQueriesComponent
  ) {}

  ngOnInit(): void {}
  openForm(formType) {
    window.open(`/client/${formType}`, "_self");
  }
}

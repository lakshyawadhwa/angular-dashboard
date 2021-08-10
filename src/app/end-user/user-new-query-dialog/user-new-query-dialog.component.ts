import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-new-query-dialog",
  templateUrl: "./user-new-query-dialog.component.html",
  styleUrls: ["./user-new-query-dialog.component.scss"],
})
export class UserNewQueryDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<UserNewQueryDialogComponent>,
    private router: Router
  ) {}

  ngOnInit(): void {}
  openForm(formType) {
    this.router.navigateByUrl(`/client/${formType}`);
    this.dialogRef.close();
  }
}

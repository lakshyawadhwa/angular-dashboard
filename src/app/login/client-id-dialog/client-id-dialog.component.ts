import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";

@Component({
  selector: "app-client-id-dialog",
  templateUrl: "./client-id-dialog.component.html",
  styleUrls: ["./client-id-dialog.component.scss"],
})
export class ClientIdDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ClientIdDialogComponent>,
    private router: Router
  ) {}

  ngOnInit(): void {}
  openLogin() {
    this.router.navigateByUrl("/login");
    this.dialogRef.close();
  }
}

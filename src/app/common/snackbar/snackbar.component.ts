import { BaseService } from "src/app/services/base-service/base.service";
import { Component, OnInit } from "@angular/core";
import { SnackbarInterface } from "src/app/services/interfaces";

@Component({
  selector: "app-snackbar",
  templateUrl: "./snackbar.component.html",
  styleUrls: ["./snackbar.component.scss"],
})
export class SnackbarComponent implements OnInit {
  constructor(private baseService: BaseService) {}
  snackbarObject: SnackbarInterface;
  ngOnInit(): void {
    this.baseService.callSnackbar.subscribe((res) => {
      if (res.message === null && res.type === null) {
        this.snackbarObject = null;
      } else {
        this.snackbarObject = res;
        this.clearMessage();
      }
    });
  }
  clearMessage() {
    setTimeout(() => {
      this.baseService.callSnackbar.next({ message: null, type: null });
    }, 4000);
  }
}

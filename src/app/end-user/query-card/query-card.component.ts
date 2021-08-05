import { Component, Input, OnInit } from "@angular/core";
import { UserQuery } from "src/app/services/query-service/query-service.service";

@Component({
	selector: "app-query-card",
	templateUrl: "./query-card.component.html",
	styleUrls: ["./query-card.component.scss"],
})
export class QueryCardComponent implements OnInit {
	constructor() {}
	@Input() query: UserQuery;

	ngOnInit(): void {
		console.log(this.query, "query");
	}
}

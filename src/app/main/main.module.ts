import { MatStepperModule } from "@angular/material/stepper";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatInputModule } from "@angular/material/input";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatDialogModule } from "@angular/material/dialog";

import { MatRadioModule } from "@angular/material/radio";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatCardModule,
		MatDividerModule,
		MatInputModule,
		MatStepperModule,
		ReactiveFormsModule,
		FormsModule,
		MatSelectModule,
		MatCheckboxModule,
		FlexLayoutModule,
		MatDialogModule,
		MatRadioModule,
		MatTooltipModule,
	],
	exports: [],
})
export class MainModule {}

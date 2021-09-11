import { FormDevtaTwoComponent } from "./advisor/forms/form-devta-two/form-devta-two.component";
import { FormDevtaOneComponent } from "./advisor/forms/form-devta-one/form-devta-one.component";
import { FormIntuitiveComponent } from "./advisor/forms/form-intuitive/form-intuitive.component";
import { FormFiveElementsComponent } from "./advisor/forms/form-five-elements/form-five-elements.component";
import { AdvisorSitesComponent } from "./advisor/advisor-sites/advisor-sites.component";
import { FormLevelOneComponent } from "./advisor/forms/form-level-one/form-level-one.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AnonymousUserLayoutComponent } from "./common/anonymous-user-layout/anonymous-user-layout.component";
import { SignInComponent } from "./login/sign-in/sign-in.component";
import { AuthorizedUserLayoutComponent } from "./common/authorized-user-layout/authorized-user-layout.component";
import { AuthGuardGuard } from "./auth-guard.guard";
import { EndUserComponent } from "./end-user/end-user.component";
import { UserNewQueryDialogComponent } from "./end-user/user-new-query-dialog/user-new-query-dialog.component";
import { UserQueryFormComponent } from "./end-user/user-query-form/user-query-form.component";
import { NewSiteFormComponent } from "./end-user/new-site-form/new-site-form.component";
import { SitesComponent } from "./end-user/sites/sites.component";
import { SignUpComponent } from "./login/sign-up/sign-up.component";
import { ProfileCardComponent } from "./end-user/profile-card/profile-card.component";
import { AdvisorQueriesComponent } from "./advisor/advisor-queries/advisor-queries.component";
import { AdvisorUserLayoutComponent } from "./common/advisor-user-layout/advisor-user-layout.component";
import { FormLevelOneBComponent } from "./advisor/forms/form-level-one-b/form-level-one-b.component";
import { FormPrakritiPersonComponent } from "./advisor/forms/form-prakriti-person/form-prakriti-person.component";
import { FormPrakritiBuildingComponent } from "./advisor/forms/form-prakriti-building/form-prakriti-building.component";
import { FormPrakritiSuggestionComponent } from "./advisor/forms/form-prakriti-suggestion/form-prakriti-suggestion.component";
import { FormActivityComponent } from "./advisor/forms/form-activity/form-activity.component";
import { FormUtilityComponent } from "./advisor/forms/form-utility/form-utility.component";
import { FormObjectsComponent } from "./advisor/forms/form-objects/form-objects.component";
import { FormMvRemediesComponent } from "./advisor/forms/form-mv-remedies/form-mv-remedies.component";
import { FormAstroAuditOneComponent } from "./advisor/forms/form-astro-audit-one/form-astro-audit-one.component";
import { FormAstroAuditThreeComponent } from "./advisor/forms/form-astro-audit-three/form-astro-audit-three.component";
import { FormAstroAuditTwoComponent } from "./advisor/forms/form-astro-audit-two/form-astro-audit-two.component";
import { FormMarmaComponent } from "./advisor/forms/form-marma/form-marma.component";
import { FormWrapperComponent } from "./common/form-wrapper/form-wrapper.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "login",
    component: AnonymousUserLayoutComponent,
    data: { accountType: null },
    children: [
      { path: "", component: SignInComponent },
      { path: "sign-up", component: SignUpComponent },
    ],
  },
  {
    path: "client",
    component: AuthorizedUserLayoutComponent,
    canActivate: [AuthGuardGuard],
    data: { accountType: "client" },
    children: [
      { path: "", component: ProfileCardComponent },
      { path: "queries", component: EndUserComponent },
      { path: "existing", component: UserQueryFormComponent },
      { path: "new", component: NewSiteFormComponent },
      { path: "sites", component: SitesComponent },
    ],
  },
  {
    path: "advisor",
    component: AdvisorUserLayoutComponent,
    canActivate: [AuthGuardGuard],
    data: { accountType: "advisor" },
    children: [
      { path: "", component: ProfileCardComponent },
      { path: "queries", component: AdvisorQueriesComponent },
      { path: "sites", component: AdvisorSitesComponent },
      { path: "existing", component: UserQueryFormComponent },
      { path: "new", component: NewSiteFormComponent },
      { path: "form-1-a", component: FormLevelOneComponent },
      { path: "form-1-b-prakriti", component: FormPrakritiPersonComponent },
      { path: "form-1-b-building", component: FormPrakritiBuildingComponent },
      {
        path: "form-1-b-suggestion",
        component: FormPrakritiSuggestionComponent,
      },
      { path: "form-1-c", component: FormLevelOneBComponent },
      { path: "form-1-d", component: FormFiveElementsComponent },
      { path: "form-1-e", component: FormActivityComponent },
      { path: "form-1-f", component: FormUtilityComponent },
      { path: "form-1-g", component: FormObjectsComponent },
      { path: "form-1-h", component: FormMvRemediesComponent },
      { path: "form-1-i-1", component: FormAstroAuditOneComponent },
      { path: "form-1-i-2", component: FormAstroAuditTwoComponent },
      { path: "form-1-i-3", component: FormAstroAuditThreeComponent },
      { path: "form-1-j", component: FormMarmaComponent },
      { path: "form-1-j-1", component: FormDevtaTwoComponent },
      { path: "form-1-k", component: FormIntuitiveComponent },
      { path: "form-1-k-1", component: FormDevtaOneComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

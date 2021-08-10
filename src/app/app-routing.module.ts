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

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "login",
    component: AnonymousUserLayoutComponent,
    children: [
      { path: "", component: SignInComponent },
      { path: "sign-up", component: SignUpComponent },
    ],
  },
  {
    path: "client",
    component: AuthorizedUserLayoutComponent,
    canActivate: [AuthGuardGuard],
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
    children: [
      { path: "queries", component: AdvisorQueriesComponent },
      { path: "form-1-a", component: FormLevelOneComponent },
      { path: "form-1-b", component: FormLevelOneBComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

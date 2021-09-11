import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AnonymousUserLayoutComponent } from "./common/anonymous-user-layout/anonymous-user-layout.component";
import { LoginModule } from "./login/login.module";
import { AuthorizedUserLayoutComponent } from "./common/authorized-user-layout/authorized-user-layout.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { AuthRequestInterceptor } from "./common/auth-request.interceptor";
import { MainModule } from "./main/main.module";
import { MatStepperModule } from "@angular/material/stepper";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { EndUserComponent } from "./end-user/end-user.component";
import { UserQueriesComponent } from "./end-user/user-queries/user-queries.component";
import { QueryCardComponent } from "./end-user/query-card/query-card.component";
import { UserQueryFormComponent } from "./end-user/user-query-form/user-query-form.component";
// import { UserSiteFormComponent } from "./end-user/user-site-form/user-site-form.component";
import { NewSiteFormComponent } from "./end-user/new-site-form/new-site-form.component";
import { UserNewQueryDialogComponent } from "./end-user/user-new-query-dialog/user-new-query-dialog.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SitesComponent } from "./end-user/sites/sites.component";
import { SiteCardComponent } from "./end-user/site-card/site-card.component";
import { QueryViewComponent } from "./end-user/query-view/query-view.component";
import { SiteViewComponent } from "./end-user/site-view/site-view.component";
import { ProfileCardComponent } from "./end-user/profile-card/profile-card.component";
import { FormLevelOneComponent } from "./advisor/forms/form-level-one/form-level-one.component";
import { AdvisorQueriesComponent } from "./advisor/advisor-queries/advisor-queries.component";
import { AdvisorQueryCardComponent } from "./advisor/advisor-query-card/advisor-query-card.component";
import { AdvisorUserLayoutComponent } from "./common/advisor-user-layout/advisor-user-layout.component";
import { AdvisorQueryViewComponent } from "./advisor/advisor-query-view/advisor-query-view.component";
import { FormLevelOneBComponent } from "./advisor/forms/form-level-one-b/form-level-one-b.component";
import { AdvisorSitesComponent } from "./advisor/advisor-sites/advisor-sites.component";
import { AdvisorSiteCardsComponent } from "./advisor/advisor-site-cards/advisor-site-cards.component";
import { ViewSiteQueriesComponent } from "./advisor/view-site-queries/view-site-queries.component";
import { FileUploadComponent } from "./common/file-upload/file-upload.component";
import { EditProfileComponent } from "./end-user/edit-profile/edit-profile.component";
import { FormPrakritiPersonComponent } from "./advisor/forms/form-prakriti-person/form-prakriti-person.component";
import { FormPrakritiBuildingComponent } from "./advisor/forms/form-prakriti-building/form-prakriti-building.component";
import { FormPrakritiSuggestionComponent } from "./advisor/forms/form-prakriti-suggestion/form-prakriti-suggestion.component";
import { FormFiveElementsComponent } from "./advisor/forms/form-five-elements/form-five-elements.component";
import { FormActivityComponent } from "./advisor/forms/form-activity/form-activity.component";
import { FormUtilityComponent } from "./advisor/forms/form-utility/form-utility.component";
import { FormObjectsComponent } from "./advisor/forms/form-objects/form-objects.component";
import { FormMvRemediesComponent } from "./advisor/forms/form-mv-remedies/form-mv-remedies.component";
import { FormAstroAuditOneComponent } from "./advisor/forms/form-astro-audit-one/form-astro-audit-one.component";
import { FormAstroAuditTwoComponent } from "./advisor/forms/form-astro-audit-two/form-astro-audit-two.component";
import { FormAstroAuditThreeComponent } from "./advisor/forms/form-astro-audit-three/form-astro-audit-three.component";
import { FormMarmaComponent } from "./advisor/forms/form-marma/form-marma.component";
import { FormDevtaOneComponent } from "./advisor/forms/form-devta-one/form-devta-one.component";
import { FormDevtaTwoComponent } from "./advisor/forms/form-devta-two/form-devta-two.component";
import { FormIntuitiveComponent } from "./advisor/forms/form-intuitive/form-intuitive.component";
import { GetUploadedDocComponent } from "./common/get-uploaded-doc/get-uploaded-doc.component";
import { FormWrapperComponent } from "./common/form-wrapper/form-wrapper.component";
import { AdvisorInfoComponent } from "./advisor/forms/advisor-info/advisor-info.component";
import { QueryResolvingViewComponent } from "./advisor/query-resolving-view/query-resolving-view.component";
import { SnackbarModule } from "./common/snackbar/snackbar.module";
import { ViewResolvedQueriesComponent } from "./advisor/view-resolved-queries/view-resolved-queries.component";
import { ForgotPasswordComponent } from "./common/forgot-password/forgot-password.component";
import { MatMenuModule } from "@angular/material/menu";
import { FooterComponent } from "./common/footer/footer.component";
import { FilterComponent } from "./common/filter/filter.component";

@NgModule({
  declarations: [
    EndUserComponent,
    UserQueriesComponent,
    QueryCardComponent,
    UserQueryFormComponent,
    NewSiteFormComponent,
    UserNewQueryDialogComponent,
    AnonymousUserLayoutComponent,
    AuthorizedUserLayoutComponent,
    AppComponent,
    SitesComponent,
    SiteCardComponent,
    QueryViewComponent,
    SiteViewComponent,
    ProfileCardComponent,
    FormLevelOneComponent,
    AdvisorQueriesComponent,
    AdvisorQueryCardComponent,
    AdvisorUserLayoutComponent,
    AdvisorQueryViewComponent,
    FormLevelOneBComponent,
    AdvisorSitesComponent,
    AdvisorSiteCardsComponent,
    ViewSiteQueriesComponent,
    FileUploadComponent,
    EditProfileComponent,
    FormPrakritiPersonComponent,
    FormPrakritiBuildingComponent,
    FormPrakritiSuggestionComponent,
    FormFiveElementsComponent,
    FormActivityComponent,
    FormUtilityComponent,
    FormObjectsComponent,
    FormMvRemediesComponent,
    FormAstroAuditOneComponent,
    FormAstroAuditTwoComponent,
    FormAstroAuditThreeComponent,
    FormMarmaComponent,
    FormDevtaOneComponent,
    FormDevtaTwoComponent,
    FormIntuitiveComponent,
    GetUploadedDocComponent,
    FormWrapperComponent,
    AdvisorInfoComponent,
    QueryResolvingViewComponent,
    ViewResolvedQueriesComponent,
    ForgotPasswordComponent,
    FooterComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    LoginModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MainModule,
    MatStepperModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    SnackbarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
  ],
  exports: [LoginModule, HttpClientModule, MainModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthRequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

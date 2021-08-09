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
import { SiteViewComponent } from './end-user/site-view/site-view.component';
import { ProfileCardComponent } from './end-user/profile-card/profile-card.component';

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

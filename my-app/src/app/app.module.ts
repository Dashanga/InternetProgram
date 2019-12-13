import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RaspisanieComponent } from './raspisanie/raspisanie.component';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorisationComponent } from './authorisation/authorisation.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthorisationService } from "./authorisation/authorisation.service";
import { TokenInterceptor } from "./token.interceptor";


import { AuthGuard } from './authorisation/authorisation.guard';

const appRoutes: Routes = [
{ path: 'main', canActivate: [AuthGuard], component: MainComponent },
{ path: 'raspisanie', canActivate: [AuthGuard], component: RaspisanieComponent },
{ path: 'admin', canActivate: [AuthGuard], component: AdminComponent },
{ path: 'registration', component: RegistrationComponent },
{ path: 'authorisation', component: AuthorisationComponent },
{ path: '', redirectTo: '/authorisation', pathMatch: 'full' }
];

@NgModule({
declarations: [
AppComponent,
RaspisanieComponent,
MainComponent,
AdminComponent,
AuthorisationComponent,
RegistrationComponent
],
imports: [
    HttpClientModule,
RouterModule.forRoot(
appRoutes,
{ enableTracing: true } // <— debugging purposes only
),
BrowserModule,
AppRoutingModule,
FormsModule,
],
providers: [
    AuthorisationService, 
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    AuthGuard
],
bootstrap: [AppComponent]
})

export class AppModule { }
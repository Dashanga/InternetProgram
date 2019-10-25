import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RaspisanieComponent } from './raspisanie/raspisanie.component';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
{ path: 'main', component: MainComponent },
{ path: 'raspisanie', component: RaspisanieComponent },
{ path: 'admin', component: AdminComponent },
{ path: '', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
declarations: [
AppComponent,
RaspisanieComponent,
MainComponent,
AdminComponent
],
imports: [
RouterModule.forRoot(
appRoutes,
{ enableTracing: true } // <— debugging purposes only
),
BrowserModule,
AppRoutingModule
],
providers: [],
bootstrap: [AppComponent]
})

export class AppModule { }
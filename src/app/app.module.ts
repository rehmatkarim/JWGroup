import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CustomMaterialModule } from './core/material.module';
import { HeaderTopComponent } from './header-top/header-top.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    MainNavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    CustomMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CustomMaterialModule } from './core/material.module';
import { HeaderTopComponent } from './header-top/header-top.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OurTeamComponent } from './our-team/our-team.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    MainNavComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    OurTeamComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    CustomMaterialModule,
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }

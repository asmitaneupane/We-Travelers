import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CabRegisterComponent } from './cab-register/cab-register.component';
import { CabBookingComponent } from './cab-booking/cab-booking.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PlaceToVisitComponent } from './place-to-visit/place-to-visit.component';
import { GuidesComponent } from './guides/guides.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CabRegisterComponent,
    CabBookingComponent,
    HomepageComponent,
    PlaceToVisitComponent,
    GuidesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

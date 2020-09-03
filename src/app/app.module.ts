import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { SearchAddressComponent } from './search-address/search-address.component';
import { SearchAddressResultsComponent } from './search-address-results/search-address-results.component';
import { CreateAddressComponent } from './create-address/create-address.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchBusinessLocationComponent } from './search-business-location/search-business-location.component';
import { SearchBusinessLocationResultsComponent } from './search-business-location-results/search-business-location-results.component';
import { CreateBusinessLocationComponent } from './create-business-location/create-business-location.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchAddressComponent,
    SearchAddressResultsComponent,
    CreateAddressComponent,
    SearchBusinessLocationComponent,
    SearchBusinessLocationResultsComponent,
    CreateBusinessLocationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

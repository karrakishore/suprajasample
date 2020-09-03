import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchAddressComponent } from './search-address/search-address.component';
import { SearchAddressResultsComponent } from './search-address-results/search-address-results.component';
import { CreateAddressComponent } from './create-address/create-address.component';
import { SearchBusinessLocationComponent } from './search-business-location/search-business-location.component';
import { SearchBusinessLocationResultsComponent } from './search-business-location-results/search-business-location-results.component';
import { CreateBusinessLocationComponent } from './create-business-location/create-business-location.component';


const routes: Routes = [
{path: "", component:SearchAddressComponent},
{path: "searchAddress", component:SearchAddressComponent},
{path: "searchAddressResults", component:SearchAddressResultsComponent},
{path: "createAddress", component:CreateAddressComponent},
{path:"searchBusinessLocation", component:SearchBusinessLocationComponent},
{path: "searchBusinessLocationResults", component: SearchBusinessLocationResultsComponent},
{path:"createBusinessLocation", component:CreateBusinessLocationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

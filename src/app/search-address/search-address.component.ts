import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { autoPopulatedValues } from '../autoPopulatedValuesModel';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { filter } from '../common';

@Component({
  selector: 'app-search-address',
  templateUrl: './search-address.component.html',
  styleUrls: ['./search-address.component.css']
})
export class SearchAddressComponent implements OnInit {

  showResults: boolean;
  isAdvanceSearch: boolean;

  addressIdControl = new FormControl();
  addressIdOptions: autoPopulatedValues[] = [
    { value: "123567" },
    { value: "098765" },
    { value: "873021" },
    { value: "728936" },
    { value: "882667" },
    { value: "772901" },
    { value: "710926" }
  ];
  addressIdFilteredOptions: Observable<autoPopulatedValues[]>;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.showResults = false;
    this.isAdvanceSearch = false;
    this.intializeValues();
  }

  intializeValues() {
    this.addressIdFilteredOptions = this.addressIdControl.valueChanges
      .pipe(
        startWith(''),
        map(text => filter(text, this.addressIdOptions))
      );
  }

  onSearch() {
    this.showResults = true;
    // this.router.navigateByUrl('/searchAddressResults')
  }

  onAdvanceSearch() {
    this.isAdvanceSearch = true;
  }

  onClear() {
    this.showResults = false;
  }
}

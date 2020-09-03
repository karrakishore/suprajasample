import { Component, OnInit } from '@angular/core';
import { autoValue } from '../create-business-location/create-business-location.component';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-business-location',
  templateUrl: './search-business-location.component.html',
  styleUrls: ['./search-business-location.component.css']
})
export class SearchBusinessLocationComponent implements OnInit {

  businessLocationControl = new FormControl();
  businessLocationOptions: autoValue[] = [
    { value: 'Gothenburg' },
    { value: 'Northernmost' },
    { value: 'The Stockholm Archipelago' },
    { value: '-Malmö' },
    { value: 'ICEHOTEL and Swedish Lapland' },
    { value: 'Kosterhavet' },
    { value: 'Marstrand' },
    { value: 'Wallander’s Ystad' },
    { value: 'Skåne' },
    { value: 'Visby/Gotland' }
  ];
  businessLocationFilteredOptions: Observable<autoValue[]>;

  constructor() { }

  ngOnInit(): void {
    this.businessLocationFilteredOptions = this.businessLocationControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value, this.businessLocationOptions))
      );
  }

  private filter(val: string, options: any): any {
    const filterValue = val ? val.toLowerCase() : '';

    return options.filter(option => option.value.toLowerCase().includes(filterValue));
  }

}

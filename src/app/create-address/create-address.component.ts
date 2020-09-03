import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.css']
})
export class CreateAddressComponent implements OnInit {

  bottomMessage: string;

  xControl = new FormControl();
  xOptions: coordinate[] = [
    { value: '-775858.6194' },
    { value: '-4903039.9874' },
    { value: '3991748.6190' },
    { value: '-664747.5083' },
    { value: '-3802028.8763' },
    { value: '2880637.5080' },
    { value: '-886969.7205' },
    { value: '-5014140.0985' },
    { value: '4002859.7201' },
    { value: '-866749.6194' },
    { value: '-4913139.9874' },
    { value: '3991748.6191' }
  ];

  yControl = new FormControl();
  yOptions: coordinate[] = [
    { value: '1095858.6194' },
    { value: '6103039.9874' },
    { value: '7653448.6190' },
    { value: '1095558.6194' },
    { value: '6104039.9874' },
    { value: '7653558.6190' },
    { value: '1095505.6194' },
    { value: '6102229.9874' },
    { value: '7665748.6190' },
    { value: '1067358.6194' },
    { value: '6195739.9874' },
    { value: '7853448.6190' },
    { value: '1209858.6194' },
    { value: '6142039.9874' },
    { value: '7653450.6190' },
    { value: '1095863.6194' },
    { value: '6103041.9874' },
    { value: '7653471.6190' }
  ];

  zControl = new FormControl();
  zOptions: coordinate[] = [
    { value: '-775858.6194' },
    { value: '-4903039.9874' },
    { value: '3991748.6190' },
    { value: '-775858.6194' },
    { value: '-4903039.9874' },
    { value: '3991748.6190' },
    { value: '-775858.6194' },
    { value: '-4903039.9874' },
    { value: '3991748.6190' },
    { value: '-775858.6194' },
    { value: '-4903039.9874' },
    { value: '3991748.6190' }
  ];

  notesControl = new FormControl();
  notesOptions: notes[] = [
    { value: "Notes" },
    { value: "Remarks" },
    { value: "Comments" },
    { value: "Misc" },
    { value: "Examples" },
    { value: "Books" },
    { value: "Finals" },
    { value: "Common" },
    { value: "Making" },
    { value: "Models" },
    { value: "Months" },
    { value: "Cicles" },
    { value: "Shapes" },
    { value: "Pages" },
  ];

  countryControl = new FormControl();
  countryCodes: countryCode[] = [
    { value: "AFG" },
    { value: "BHS" },
    { value: "BLR" },
    { value: "VGB" },
    { value: "IOT" },
    { value: "KHM" },
    { value: "CPV" },
    { value: "HKG" },
    { value: "MAC" },
    { value: "CRI" },
    { value: "HRV" },
    { value: "DOM" },];

  fromDateControl = new FormControl(this.tomorrowDate);

  toDateControl = new FormControl(new Date(2999, 11, 31));

  xFilteredOptions: Observable<coordinate[]>;

  yFilteredOptions: Observable<coordinate[]>;

  zFilteredOptions: Observable<coordinate[]>;

  notesFilteredOptions: Observable<notes[]>;

  countryFilteredOptions: Observable<countryCode[]>;

  addressCreated: boolean;
  isError: boolean;

  constructor() { }

  ngOnInit(): void {
    this.addressCreated = false;
    this.xFilteredOptions = this.xControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value, this.xOptions))
      );
    this.yFilteredOptions = this.yControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value, this.yOptions))
      );
    this.zFilteredOptions = this.zControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value, this.zOptions))
      );

    this.notesFilteredOptions = this.notesControl.valueChanges
      .pipe(
        startWith(''),
        map(text => this.filter(text, this.notesOptions))
      );

    this.countryFilteredOptions = this.countryControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value, this.countryCodes))
      );

    this.addressCreated = true;
    this.isError = false;
  }

  private filter(val: string, options: any): any {
    const filterValue = val ? val.toLowerCase() : '';

    return options.filter(option => option.value.toLowerCase().includes(filterValue));
  }

  get tomorrowDate() {
    const today = new Date();
    return new Date(today.setDate(today.getDate() + 1));
  }

  onCreate() {
    this.addressCreated = true;
    this.bottomMessage = "Address is created successfully with Address Id: 1009873.";
    this.isError = false;
  }

  onClear() {
    this.addressCreated = false;
    this.isError = false;
  }

}

export interface coordinate {
  value: string;
}

export interface notes {
  value: string;
}

export interface countryCode {
  value: string;
}

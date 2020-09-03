import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-create-business-location',
  templateUrl: './create-business-location.component.html',
  styleUrls: ['./create-business-location.component.css']
})
export class CreateBusinessLocationComponent implements OnInit {

  bottomMessage: string;
  addressCreated: boolean;
  isError: boolean;

  notesControl = new FormControl();
  notesOptions: autoValue[] = [
    { value: "remarks" },
    { value: "comments" },
    { value: "complaince" },
    { value: "misc" },
    { value: "notes" },
    { value: "additions" },
    { value: "extras" }
  ];
  notesFilterOptions: Observable<autoValue[]>;

  userFriendlyIdControl = new FormControl();
  userFriendlyIdOptions: autoValue[] = [
    { value: "12345" },
    { value: "67543" },
    { value: "87463" },
    { value: "94370" },
    { value: "76212" },
    { value: "77711" },
    { value: "88112" }
  ];
  userFriendlyFilterOptions: Observable<autoValue[]>;

  responsiblePartyControl = new FormControl();
  responsiblePartyOptions: autoValue[] = [
    { value: "resp1" },
    { value: "Talkies" },
    { value: "Steads" },
    { value: "Cites" },
    { value: "Farm" },
    { value: "Xyz" },
    { value: "Trinity" }
  ];
  responsiblePartyFilterOptions: Observable<autoValue[]>;

  nameShortControl = new FormControl();
  nameShortOptions: autoValue[] = [
    { value: "Aquila" },
    { value: "Villa" },
    { value: "Apartment" },
    { value: "RowHouse" },
    { value: "Farm" },
    { value: "GreenLand" },
    { value: "Villsments" }
  ];
  nameShortFilterOptions: Observable<autoValue[]>;

  nickNameControl = new FormControl();
  nickNameOptions: autoValue[] = [
    { value: "Aquila" },
    { value: "Villa" },
    { value: "Apartment" },
    { value: "RowHouse" },
    { value: "Farm" },
    { value: "GreenLand" },
    { value: "Villsments" }
  ];
  nickNameFilterOptions: Observable<autoValue[]>;

  nameControl = new FormControl();
  nameOptions: autoValue[] = [
    { value: "Aquila" },
    { value: "Villa" },
    { value: "Apartment" },
    { value: "RowHouse" },
    { value: "Farm" },
    { value: "GreenLand" },
    { value: "Villsments" }
  ];
  nameFilterOptions: Observable<autoValue[]>;

  fromDateControl = new FormControl(this.tomorrowDate);

  toDateControl = new FormControl(new Date(2999, 11, 31));
  constructor() { }

  ngOnInit(): void {
    this.responsiblePartyFilterOptions = this.responsiblePartyControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value, this.responsiblePartyOptions))
      );

    this.userFriendlyFilterOptions = this.userFriendlyIdControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value, this.userFriendlyIdOptions))
      );

      this.notesFilterOptions = this.notesControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value, this.notesOptions))
      );

      this.nameShortFilterOptions = this.nameShortControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value, this.nameShortOptions))
      );

      this.nickNameFilterOptions = this.nickNameControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value, this.nickNameOptions))
      );

      this.nameFilterOptions = this.nameControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value, this.nameOptions))
      );

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
    this.bottomMessage = "Business Location is created successfully with Business Location Id: 1009873.";
    this.isError = false;
  }

  onClear() {
    this.addressCreated = false;
    this.isError = false;
  }

}

export interface autoValue {
  value: string;
}

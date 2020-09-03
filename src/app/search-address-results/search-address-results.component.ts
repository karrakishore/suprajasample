import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-search-address-results',
  templateUrl: './search-address-results.component.html',
  styleUrls: ['./search-address-results.component.css']
})
export class SearchAddressResultsComponent implements OnInit {
  displayedColumns: string[] = ['addressId', 'streetName', 'streetNumber',
    'houseLetter', 'villageName', 'farmName', 'city', 'country', 'postalCode'];
  dataSource = new MatTableDataSource<address>(ADDRESS_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}

export interface address {
  addressId: string;
  streetName: string;
  streetNumber: string;
  houseLetter: string;
  villageName: string;
  farmName: string;
  city: string;
  country: string;
  postalCode: string;
}

const ADDRESS_DATA: address[] = [
  {
    addressId: '100001', streetName: 'Victoria',
    streetNumber: '34/5', houseLetter: 'House', villageName: 'Villa', farmName: 'McDonald',
    city: 'StockHolmes', country: 'Sweden', postalCode: '2345209'
  },
  {
    addressId: '100001', streetName: 'Victoria',
    streetNumber: '34/5', houseLetter: 'House', villageName: 'Villa', farmName: 'McDonald',
    city: 'StockHolmes', country: 'Sweden', postalCode: '2345209'
  },
  {
    addressId: '100001', streetName: 'Victoria',
    streetNumber: '34/5', houseLetter: 'House', villageName: 'Villa', farmName: 'McDonald',
    city: 'StockHolmes', country: 'Sweden', postalCode: '2345209'
  },
  {
    addressId: '100001', streetName: 'Victoria',
    streetNumber: '34/5', houseLetter: 'House', villageName: 'Villa', farmName: 'McDonald',
    city: 'StockHolmes', country: 'Sweden', postalCode: '2345209'
  },
  {
    addressId: '100001', streetName: 'Victoria',
    streetNumber: '34/5', houseLetter: 'House', villageName: 'Villa', farmName: 'McDonald',
    city: 'StockHolmes', country: 'Sweden', postalCode: '2345209'
  },
  {
    addressId: '100001', streetName: 'Victoria',
    streetNumber: '34/5', houseLetter: 'House', villageName: 'Villa', farmName: 'McDonald',
    city: 'StockHolmes', country: 'Sweden', postalCode: '2345209'
  },
  {
    addressId: '100001', streetName: 'Victoria',
    streetNumber: '34/5', houseLetter: 'House', villageName: 'Villa', farmName: 'McDonald',
    city: 'StockHolmes', country: 'Sweden', postalCode: '2345209'
  },
  {
    addressId: '100001', streetName: 'Victoria',
    streetNumber: '34/5', houseLetter: 'House', villageName: 'Villa', farmName: 'McDonald',
    city: 'StockHolmes', country: 'Sweden', postalCode: '2345209'
  },
  {
    addressId: '100001', streetName: 'Victoria',
    streetNumber: '34/5', houseLetter: 'House', villageName: 'Villa', farmName: 'McDonald',
    city: 'StockHolmes', country: 'Sweden', postalCode: '2345209'
  },
  {
    addressId: '100001', streetName: 'Victoria',
    streetNumber: '34/5', houseLetter: 'House', villageName: 'Villa', farmName: 'McDonald',
    city: 'StockHolmes', country: 'Sweden', postalCode: '2345209'
  },
  {
    addressId: '100001', streetName: 'Victoria',
    streetNumber: '34/5', houseLetter: 'House', villageName: 'Villa', farmName: 'McDonald',
    city: 'StockHolmes', country: 'Sweden', postalCode: '2345209'
  },
  {
    addressId: '100001', streetName: 'Victoria',
    streetNumber: '34/5', houseLetter: 'House', villageName: 'Villa', farmName: 'McDonald',
    city: 'StockHolmes', country: 'Sweden', postalCode: '2345209'
  },
  {
    addressId: '100001', streetName: 'Victoria',
    streetNumber: '34/5', houseLetter: 'House', villageName: 'Villa', farmName: 'McDonald',
    city: 'StockHolmes', country: 'Sweden', postalCode: '2345209'
  },
]
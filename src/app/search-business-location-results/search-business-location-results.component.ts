import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-search-business-location-results',
  templateUrl: './search-business-location-results.component.html',
  styleUrls: ['./search-business-location-results.component.css']
})
export class SearchBusinessLocationResultsComponent implements OnInit {
  displayedColumns: string[] = ['businessLocationID', 'businessLocationName', 'businessLocationNameNick',
  'businessLocationNameShort', 'validFrom', 'validTo', 'businessLocationType', 'addressType'];
  dataSource = new MatTableDataSource<businessLocation>(BUSINESS_LOCATION_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}

export interface businessLocation {
  businessLocationID: string;
  businessLocationName: string;
  businessLocationNameNick: string;
  businessLocationNameShort: string;
  validFrom: string;
  validTo: string;
  businessLocationType: string;
  addressType: string;
}

const BUSINESS_LOCATION_DATA: businessLocation[] = [
  {
    businessLocationID: '100001', businessLocationName: 'Victoria',
    businessLocationNameNick: 'Victoria', businessLocationNameShort: 'Victoria', 
    validFrom: '5/30/2001', validTo: '5/30/2012',
    businessLocationType: 'Organization', addressType: 'Private'
  },
  {
    businessLocationID: '100001', businessLocationName: 'Victoria',
    businessLocationNameNick: 'Victoria', businessLocationNameShort: 'Victoria', 
    validFrom: '5/30/2001', validTo: '5/30/2012',
    businessLocationType: 'Organization', addressType: 'Private'
  },
  {
    businessLocationID: '100001', businessLocationName: 'Victoria',
    businessLocationNameNick: 'Victoria', businessLocationNameShort: 'Victoria', 
    validFrom: '5/30/2001', validTo: '5/30/2012',
    businessLocationType: 'Organization', addressType: 'Private'
  },
  {
    businessLocationID: '100001', businessLocationName: 'Victoria',
    businessLocationNameNick: 'Victoria', businessLocationNameShort: 'Victoria', 
    validFrom: '5/30/2001', validTo: '5/30/2012',
    businessLocationType: 'Organization', addressType: 'Private'
  },
  {
    businessLocationID: '100001', businessLocationName: 'Victoria',
    businessLocationNameNick: 'Victoria', businessLocationNameShort: 'Victoria', 
    validFrom: '5/30/2001', validTo: '5/30/2012',
    businessLocationType: 'Organization', addressType: 'Private'
  },
  {
    businessLocationID: '100001', businessLocationName: 'Victoria',
    businessLocationNameNick: 'Victoria', businessLocationNameShort: 'Victoria', 
    validFrom: '5/30/2001', validTo: '5/30/2012',
    businessLocationType: 'Organization', addressType: 'Private'
  },
  {
    businessLocationID: '100001', businessLocationName: 'Victoria',
    businessLocationNameNick: 'Victoria', businessLocationNameShort: 'Victoria', 
    validFrom: '5/30/2001', validTo: '5/30/2012',
    businessLocationType: 'Organization', addressType: 'Private'
  },
  {
    businessLocationID: '100001', businessLocationName: 'Victoria',
    businessLocationNameNick: 'Victoria', businessLocationNameShort: 'Victoria', 
    validFrom: '5/30/2001', validTo: '5/30/2012',
    businessLocationType: 'Organization', addressType: 'Private'
  },
  {
    businessLocationID: '100001', businessLocationName: 'Victoria',
    businessLocationNameNick: 'Victoria', businessLocationNameShort: 'Victoria', 
    validFrom: '5/30/2001', validTo: '5/30/2012',
    businessLocationType: 'Organization', addressType: 'Private'
  }
]; 
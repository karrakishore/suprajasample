import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAddressResultsComponent } from './search-address-results.component';

describe('SearchAddressResultsComponent', () => {
  let component: SearchAddressResultsComponent;
  let fixture: ComponentFixture<SearchAddressResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAddressResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAddressResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

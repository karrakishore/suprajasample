import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBusinessLocationResultsComponent } from './search-business-location-results.component';

describe('SearchBusinessLocationResultsComponent', () => {
  let component: SearchBusinessLocationResultsComponent;
  let fixture: ComponentFixture<SearchBusinessLocationResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBusinessLocationResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBusinessLocationResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

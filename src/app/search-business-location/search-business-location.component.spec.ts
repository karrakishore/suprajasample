import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBusinessLocationComponent } from './search-business-location.component';

describe('SearchBusinessLocationComponent', () => {
  let component: SearchBusinessLocationComponent;
  let fixture: ComponentFixture<SearchBusinessLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBusinessLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBusinessLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBusinessLocationComponent } from './create-business-location.component';

describe('CreateBusinessLocationComponent', () => {
  let component: CreateBusinessLocationComponent;
  let fixture: ComponentFixture<CreateBusinessLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBusinessLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBusinessLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

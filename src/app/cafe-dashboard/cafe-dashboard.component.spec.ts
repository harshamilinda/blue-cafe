import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeDashboardComponent } from './cafe-dashboard.component';

describe('CafeDashboardComponent', () => {
  let component: CafeDashboardComponent;
  let fixture: ComponentFixture<CafeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

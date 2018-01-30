import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeOrderComponent } from './cafe-order.component';

describe('CafeOrderComponent', () => {
  let component: CafeOrderComponent;
  let fixture: ComponentFixture<CafeOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

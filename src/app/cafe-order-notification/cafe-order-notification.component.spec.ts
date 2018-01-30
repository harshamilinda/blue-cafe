import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeOrderNotificationComponent } from './cafe-order-notification.component';

describe('CafeOrderNotificationComponent', () => {
  let component: CafeOrderNotificationComponent;
  let fixture: ComponentFixture<CafeOrderNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeOrderNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeOrderNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

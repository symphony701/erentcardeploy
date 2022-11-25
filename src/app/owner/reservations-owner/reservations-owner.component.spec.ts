import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsOwnerComponent } from './reservations-owner.component';

describe('ReservationsOwnerComponent', () => {
  let component: ReservationsOwnerComponent;
  let fixture: ComponentFixture<ReservationsOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

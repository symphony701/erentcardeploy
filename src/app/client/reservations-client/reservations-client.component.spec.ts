import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsClientComponent } from './reservations-client.component';

describe('ReservationsClientComponent', () => {
  let component: ReservationsClientComponent;
  let fixture: ComponentFixture<ReservationsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

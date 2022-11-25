import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarClientComponent } from './car-client.component';

describe('CarClientComponent', () => {
  let component: CarClientComponent;
  let fixture: ComponentFixture<CarClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

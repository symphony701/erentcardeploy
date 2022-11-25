import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingCarOwnerComponent } from './rating-car-owner.component';

describe('RatingCarOwnerComponent', () => {
  let component: RatingCarOwnerComponent;
  let fixture: ComponentFixture<RatingCarOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingCarOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingCarOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

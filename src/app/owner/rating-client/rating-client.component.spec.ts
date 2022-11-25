import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingClientComponent } from './rating-client.component';

describe('RatingClientComponent', () => {
  let component: RatingClientComponent;
  let fixture: ComponentFixture<RatingClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

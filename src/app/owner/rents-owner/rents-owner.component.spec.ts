import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentsOwnerComponent } from './rents-owner.component';

describe('RentsOwnerComponent', () => {
  let component: RentsOwnerComponent;
  let fixture: ComponentFixture<RentsOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentsOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentsOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentsClientComponent } from './rents-client.component';

describe('RentsClientComponent', () => {
  let component: RentsClientComponent;
  let fixture: ComponentFixture<RentsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentsClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

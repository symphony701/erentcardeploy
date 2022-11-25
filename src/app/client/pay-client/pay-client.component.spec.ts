import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayClientComponent } from './pay-client.component';

describe('PayClientComponent', () => {
  let component: PayClientComponent;
  let fixture: ComponentFixture<PayClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansOwnerComponent } from './plans-owner.component';

describe('PlansOwnerComponent', () => {
  let component: PlansOwnerComponent;
  let fixture: ComponentFixture<PlansOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

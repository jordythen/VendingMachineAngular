import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendingmachineComponent } from './vendingmachine.component';

describe('VendingmachineComponent', () => {
  let component: VendingmachineComponent;
  let fixture: ComponentFixture<VendingmachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendingmachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendingmachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVendingmachineComponent } from './my-vendingmachine.component';

describe('MyVendingmachineComponent', () => {
  let component: MyVendingmachineComponent;
  let fixture: ComponentFixture<MyVendingmachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVendingmachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVendingmachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

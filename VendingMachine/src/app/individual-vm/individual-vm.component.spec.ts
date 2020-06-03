import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualVMComponent } from './individual-vm.component';

describe('IndividualVMComponent', () => {
  let component: IndividualVMComponent;
  let fixture: ComponentFixture<IndividualVMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualVMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualVMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

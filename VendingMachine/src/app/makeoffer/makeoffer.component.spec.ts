import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeofferComponent } from './makeoffer.component';

describe('MakeofferComponent', () => {
  let component: MakeofferComponent;
  let fixture: ComponentFixture<MakeofferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeofferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

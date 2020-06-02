import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewofferComponent } from './viewoffer.component';

describe('ViewofferComponent', () => {
  let component: ViewofferComponent;
  let fixture: ComponentFixture<ViewofferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewofferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

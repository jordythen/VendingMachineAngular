import { TestBed } from '@angular/core/testing';

import { VendingmachineService } from './vendingmachine.service';

describe('VendingmachineService', () => {
  let service: VendingmachineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendingmachineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

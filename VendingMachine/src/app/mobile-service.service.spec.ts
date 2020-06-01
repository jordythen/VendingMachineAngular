import { TestBed } from '@angular/core/testing';

import { MobileServiceService } from './mobile-service.service';

describe('MobileServiceService', () => {
  let service: MobileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { VisitTrackingService } from './visit-tracking.service';

describe('VisitTrackingService', () => {
  let service: VisitTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

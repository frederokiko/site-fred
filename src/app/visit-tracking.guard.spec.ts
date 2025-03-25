import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { visitTrackingGuard } from './visit-tracking.guard';

describe('visitTrackingGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => visitTrackingGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

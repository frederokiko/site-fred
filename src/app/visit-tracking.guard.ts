import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { VisitTrackingService } from './visit-tracking.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitTrackingGuard implements CanActivate {
  constructor(private visitTrackingService: VisitTrackingService) {}

  canActivate(): Observable<boolean> {
    this.visitTrackingService.trackInitialVisit();
    return of(true);
  }
}

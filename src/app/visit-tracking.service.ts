import { Injectable } from '@angular/core';
import { VisitCounterService } from './visit-counter.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ 
  providedIn: 'root' 
})
export class VisitTrackingService {
  private readonly VISIT_TRACKING_KEY = 'visit_tracking_timestamp';

  constructor(private visitCounterService: VisitCounterService) {}

  trackInitialVisit() {
    // Vérifie si localStorage est disponible
    if (this.isLocalStorageAvailable() && this.shouldIncrementVisitCount()) {
      this.visitCounterService.incrementVisitCount()
        .pipe(
          catchError(error => {
            console.error('Erreur lors de l\'incrémentation du compteur de visites', error);
            return of(null);
          })
        )
        .subscribe({
          next: (count) => {
            if (count !== null) {
              this.safeSetItem(this.VISIT_TRACKING_KEY, new Date().toISOString());
              console.log('Compteur de visites incrémenté:', count);
            }
          }
        });
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      // Vérifie si localStorage est accessible
      const test = 'test';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  private safeSetItem(key: string, value: string) {
    if (this.isLocalStorageAvailable()) {
      try {
        localStorage.setItem(key, value);
      } catch (e) {
        console.error('Impossible d\'écrire dans localStorage', e);
      }
    }
  }

  private shouldIncrementVisitCount(): boolean {
    // Vérifie la disponibilité de localStorage avant toute opération
    if (!this.isLocalStorageAvailable()) {
      return true; // Incrémente par défaut si localStorage n'est pas disponible
    }

    const lastVisitTimestamp = localStorage.getItem(this.VISIT_TRACKING_KEY);
    
    if (!lastVisitTimestamp) {
      // Pas de visite précédente enregistrée
      return true;
    }

    const lastVisitDate = new Date(lastVisitTimestamp);
    const today = new Date();

    // Vérifie si la dernière visite était avant aujourd'hui
    return this.isDifferentDay(lastVisitDate, today);
  }

  private isDifferentDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() !== date2.getFullYear() ||
           date1.getMonth() !== date2.getMonth() ||
           date1.getDate() !== date2.getDate();
  }
}

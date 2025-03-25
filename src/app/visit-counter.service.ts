import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VisitCounterService {
  private http = inject(HttpClient);
  
  private binUrl = 'https://api.jsonbin.io/v3/b/67e2a73b8561e97a50f26f16';
  private apiKey = '$2a$10$olANJ/VM/4NKuwLEIZx5Ru50NIFHdn53ZyGFl66koI3.oBcgcxYX6';

  private headers = new HttpHeaders({
    'X-Master-Key': this.apiKey,
    'Content-Type': 'application/json'
  });

   // Récupérer le compteur
   getVisitCount(): Observable<number> {
    return this.http.get<any>(this.binUrl, { headers: this.headers }).pipe(
      map(response => response.record.count)
    );
  }

  // Incrémenter le compteur
  incrementVisitCount(): Observable<number> {
    return this.getVisitCount().pipe(
      switchMap(count => {
        const newCount = count + 1;
        return this.updateCounter(newCount).pipe(
          map(() => newCount)
        );
      })
    );
  }

  // Mettre à jour le compteur sur JSONBin.io
  private updateCounter(newCount: number): Observable<any> {
    return this.http.put(this.binUrl, { count: newCount }, { headers: this.headers });
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '@environments/environment';
import { Hotel } from '@features/hotels/models/hotel.model';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private readonly apiBaseUrl = environment.apiUrl;

  hotels = signal<Hotel[]>([]);

  constructor(private readonly http: HttpClient) {}

  getHotels(): Observable<Hotel[]> {
    if (environment.production) {
      return this.http.get<{ hotels: Hotel[] }>(`${this.apiBaseUrl}`).pipe(
        map((data) => data.hotels),
        catchError((error) => {
          console.error('Error fetching hotels: ', error);

          return of([]);
        })
      );
    }

    return this.http.get<Hotel[]>(`${this.apiBaseUrl}/hotels`).pipe(
      catchError((error) => {
        console.error('Error fetching hotels: ', error);

        return of([]);
      })
    );
  }
}

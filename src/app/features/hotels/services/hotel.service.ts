import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { environment } from '@environments/environment';
import { catchError, of, tap } from 'rxjs';
import { Hotel } from '../models/hotel.model';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private apiBaseUrl = environment.apiUrl;
  private hotels = signal<Hotel[]>([]);
  private filteredHotels = signal<Hotel[]>([]);

  constructor(private readonly http: HttpClient) {}

  getHotels(): WritableSignal<Hotel[]> {
    return this.hotels;
  }

  getFilteredHotels(): WritableSignal<Hotel[]> {
    return this.filteredHotels;
  }

  loadHotels(): void {
    this.http
      .get<Hotel[]>(`${this.apiBaseUrl}/hotels`)
      .pipe(
        tap((hotels) => {
          this.hotels.set([...hotels]);
          this.filteredHotels.set([...hotels]);
        }),
        catchError((error) => {
          console.error('Error fetching hotels: ', error);

          return of([]);
        })
      )
      .subscribe();
  }
}

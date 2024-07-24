import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Hotel } from '@features/hotels/models/hotel.model';
import { HotelService } from './hotel.service';

describe('HotelService', () => {
  let service: HotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HotelService],
    });

    service = TestBed.inject(HotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a getHotels method', () => {
    expect(service.getHotels).toBeDefined();
  });

  it('should return an Observable of Hotel[] when calling getHotels', () => {
    const hotels = service.getHotels();

    expect(hotels).toBeInstanceOf(Observable<Hotel[]>);
  });

  it('should handle HTTP errors and return an empty array', (done: DoneFn) => {
    spyOn(service['http'], 'get').and.returnValue(
      throwError(() => new Error('Error fetching hotels'))
    );

    service.getHotels().subscribe((hotels) => {
      expect(hotels).toEqual([]);

      done();
    });
  });
});

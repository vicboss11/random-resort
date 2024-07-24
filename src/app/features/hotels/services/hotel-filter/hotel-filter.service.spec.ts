import { TestBed } from '@angular/core/testing';

import { Hotel } from '@features/hotels/models/hotel.model';
import { HotelService } from '@features/hotels/services/hotel/hotel.service';
import { HotelFilterService } from './hotel-filter.service';

describe('HotelFilterService', () => {
  let hotelFilterService: HotelFilterService;
  let hotelServiceSpy: jasmine.SpyObj<HotelService>;

  const hotels: Hotel[] = [
    {
      id: 'id-1',
      name: 'Hotel A',
      image: 'Image A',
      address: 'Address A',
      stars: 4,
      rate: 8,
      price: 100,
    },
    {
      id: 'id-2',
      name: 'Hotel B',
      image: 'Image B',
      address: 'Address B',
      stars: 3,
      rate: 7,
      price: 150,
    },
    {
      id: 'id-3',
      name: 'Hotel C',
      image: 'Image C',
      address: 'Address C',
      stars: 5,
      rate: 9,
      price: 200,
    },
  ];

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HotelService', ['hotels']);

    TestBed.configureTestingModule({
      providers: [HotelFilterService, { provide: HotelService, useValue: spy }],
    });

    hotelFilterService = TestBed.inject(HotelFilterService);
    hotelServiceSpy = TestBed.inject(
      HotelService
    ) as jasmine.SpyObj<HotelService>;
  });

  it('should be created', () => {
    expect(hotelFilterService).toBeTruthy();
  });

  it('should filter hotels by search term', () => {
    hotelServiceSpy.hotels.and.returnValue(hotels);

    hotelFilterService.setSearchTerm('Hotel A');

    expect(hotelFilterService.filteredHotels()).toEqual([hotels[0]]);
  });

  it('should filter hotels by selected stars', () => {
    hotelServiceSpy.hotels.and.returnValue(hotels);

    hotelFilterService.setSelectedStars([{ name: '3 Stars', value: 3 }]);

    expect(hotelFilterService.filteredHotels()).toEqual([hotels[1]]);

    hotelFilterService.setSelectedStars([
      { name: '5 Stars', value: 5 },
      { name: '4 Stars', value: 4 },
    ]);

    expect(hotelFilterService.filteredHotels()).toEqual([hotels[0], hotels[2]]);
  });

  it('should filter hotels by rate range', () => {
    hotelServiceSpy.hotels.and.returnValue(hotels);

    hotelFilterService.setRateRange(8);

    expect(hotelFilterService.filteredHotels()).toEqual([hotels[0], hotels[2]]);
  });

  it('should filter hotels by price range', () => {
    hotelServiceSpy.hotels.and.returnValue(hotels);

    hotelFilterService.setPriceRange(150);

    expect(hotelFilterService.filteredHotels()).toEqual([hotels[0], hotels[1]]);
  });

  it('should paginate hotels', () => {
    hotelServiceSpy.hotels.and.returnValue(hotels);

    hotelFilterService.itemsPerPage.set(1);
    hotelFilterService.setCurrentPage(2);

    expect(hotelFilterService.filteredHotels()).toEqual([hotels[1]]);

    hotelFilterService.setCurrentPage(1);

    expect(hotelFilterService.filteredHotels()).toEqual([hotels[0]]);
  });
});

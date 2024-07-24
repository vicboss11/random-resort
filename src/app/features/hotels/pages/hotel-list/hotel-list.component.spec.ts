import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Hotel } from '@features/hotels/models/hotel.model';
import { HotelService } from '@features/hotels/services/hotel/hotel.service';
import { HotelFilterService } from '@features/hotels/services/hotel-filter/hotel-filter.service';
import HotelListComponent from './hotel-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('HotelListComponent', () => {
  let component: HotelListComponent;
  let fixture: ComponentFixture<HotelListComponent>;
  let hotelService: HotelService;
  let hotelFilterService: HotelFilterService;

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelListComponent, HttpClientModule],
      providers: [HotelService, HotelFilterService],
    }).compileComponents();

    fixture = TestBed.createComponent(HotelListComponent);
    hotelService = TestBed.inject(HotelService);
    hotelFilterService = TestBed.inject(HotelFilterService);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize hotels and filteredHotels', () => {
    spyOn(hotelService, 'getHotels').and.returnValue(of(hotels));

    component.ngOnInit();

    expect(hotelService.getHotels).toHaveBeenCalled();
    expect(component.hotels()).toEqual(hotels);
    expect(component.filteredHotels()).toEqual(hotels);
  });

  it('should update currentPage when onPageChange is called', () => {
    const page = 2;

    spyOn(hotelFilterService, 'setCurrentPage');

    component.onPageChange(page);

    expect(hotelFilterService.setCurrentPage).toHaveBeenCalledWith(page);
  });
});

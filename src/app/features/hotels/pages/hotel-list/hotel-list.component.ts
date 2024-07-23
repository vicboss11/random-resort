import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelItemComponent } from '../../components/hotel-item/hotel-item.component';
import { HotelFilterComponent } from '../../components/hotel-filter/hotel-filter.component';
import { HotelService } from '../../services/hotel/hotel.service';
import { HotelFilterService } from '../../services/hotel-filter/hotel-filter.service';

@Component({
  standalone: true,
  imports: [CommonModule, HotelItemComponent, HotelFilterComponent],
  templateUrl: './hotel-list.component.html',
})
export default class HotelListComponent implements OnInit {
  hotels = this.hotelService.hotels;
  filteredHotels = this.hotelFilterService.filteredHotels;

  constructor(
    private readonly hotelService: HotelService,
    private readonly hotelFilterService: HotelFilterService
  ) {}

  ngOnInit(): void {
    this.hotelService.loadHotels().subscribe((hotels) => {
      this.hotels.set(hotels);
      this.filteredHotels.set(hotels);
    });
  }
}

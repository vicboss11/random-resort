import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelService } from '../../services/hotel.service';
import { HotelItemComponent } from '../../components/hotel-item/hotel-item.component';
import { HotelFilterComponent } from '../../components/hotel-filter/hotel-filter.component';

@Component({
  standalone: true,
  imports: [CommonModule, HotelItemComponent, HotelFilterComponent],
  templateUrl: './hotel-list.component.html',
})
export default class HotelListComponent implements OnInit {
  hotels = this.hotelService.getHotels();
  filteredHotels = this.hotelService.getFilteredHotels();

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.hotelService.loadHotels();
  }

  onSearchChange(searchTerm: string): void {
    const term = searchTerm.toLowerCase();

    this.filteredHotels.set(
      this.hotels().filter((hotel) => hotel.name.toLowerCase().includes(term))
    );
  }
}

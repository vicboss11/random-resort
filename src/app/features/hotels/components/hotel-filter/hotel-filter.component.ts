import { Component } from '@angular/core';
import { FilterSearchComponent } from '@app/shared/components/filter-search/filter-search.component';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-hotel-filter',
  standalone: true,
  imports: [FilterSearchComponent],
  templateUrl: './hotel-filter.component.html',
})
export class HotelFilterComponent {
  hotels = this.hotelService.getHotels();
  filteredHotels = this.hotelService.getFilteredHotels();

  constructor(private readonly hotelService: HotelService) {}

  onSearchChange(searchTerm: string): void {
    const term = searchTerm.toLowerCase();
    const filteredHotels = this.hotels().filter((hotel) =>
      hotel.name.toLowerCase().includes(term)
    );

    this.filteredHotels.set(filteredHotels);

    console.log('filteredHotels', this.filteredHotels());
    console.log('hotels', this.hotels());
  }
}

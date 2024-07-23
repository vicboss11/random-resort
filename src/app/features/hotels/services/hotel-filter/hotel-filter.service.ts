import { Injectable, signal } from '@angular/core';
import { Hotel } from '@features/hotels/models/hotel.model';
import { HotelService } from '../hotel/hotel.service';
import { FilterCheckbox } from '@app/shared/models/filter.model';
import {
  filterPriceOptions,
  filterRateOptions,
} from '../../constants/hotel-filter';

@Injectable({
  providedIn: 'root',
})
export class HotelFilterService {
  private searchTerm = '';
  private selectedStars: FilterCheckbox[] = [];
  private rateRange: number = filterRateOptions.default!;
  private priceRange: number = filterPriceOptions.default!;

  filteredHotels = signal<Hotel[]>([]);

  constructor(private readonly hotelService: HotelService) {}

  setSearchTerm(searchTerm: string): void {
    this.searchTerm = searchTerm;

    this.applyFilters();
  }

  setSelectedStars(selectedStars: FilterCheckbox[]): void {
    this.selectedStars = selectedStars;

    this.applyFilters();
  }

  setRateRange(rateRange: number): void {
    this.rateRange = rateRange;

    this.applyFilters();
  }

  setPriceRange(priceRange: number): void {
    this.priceRange = priceRange;

    this.applyFilters();
  }

  private applyFilters(): void {
    let filteredHotels = this.hotelService.hotels();

    if (this.searchTerm) {
      filteredHotels = this.filterBySearchTerm(filteredHotels);
    }

    if (this.selectedStars.length > 0) {
      filteredHotels = this.filterByStars(filteredHotels);
    }

    if (this.rateRange) {
      filteredHotels = this.filterByRateRange(filteredHotels);
    }

    if (this.priceRange) {
      filteredHotels = this.filterByPriceRange(filteredHotels);
    }

    this.filteredHotels.set(filteredHotels);
  }

  private filterBySearchTerm(hotels: Hotel[]): Hotel[] {
    return hotels.filter((hotel) =>
      hotel.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  private filterByStars(hotels: Hotel[]): Hotel[] {
    return hotels.filter((hotel) =>
      this.selectedStars.some((star) => hotel.stars === star.value)
    );
  }

  private filterByRateRange(hotels: Hotel[]): Hotel[] {
    return hotels.filter((hotel) => hotel.rate >= this.rateRange);
  }

  private filterByPriceRange(hotels: Hotel[]): Hotel[] {
    return hotels.filter((hotel) => hotel.price <= this.priceRange);
  }
}

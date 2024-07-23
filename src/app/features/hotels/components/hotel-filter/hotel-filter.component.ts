import { Component } from '@angular/core';
import {
  filterPriceOptions,
  filterRateOptions,
  filterStarOptions,
} from '@features/hotels/constants/hotel-filter';
import { HotelFilterService } from '@features/hotels/services/hotel-filter/hotel-filter.service';
import { FilterSearchComponent } from '@shared/components/filter-search/filter-search.component';
import { FilterRangeComponent } from '@shared/components/filter-range/filter-range.component';
import { FilterCheckboxComponent } from '@shared/components/filter-checkbox/filter-checkbox.component';
import { FilterCheckbox, FilterRange } from '@shared/models/filter.model';

@Component({
  selector: 'app-hotel-filter',
  standalone: true,
  imports: [
    FilterSearchComponent,
    FilterCheckboxComponent,
    FilterRangeComponent,
  ],
  templateUrl: './hotel-filter.component.html',
})
export class HotelFilterComponent {
  filterStarCheckboxOptions: FilterCheckbox[] = filterStarOptions;
  filterRateRangeOptions: FilterRange = filterRateOptions;
  filterPriceRangeOptions: FilterRange = filterPriceOptions;

  constructor(private readonly hotelFilterService: HotelFilterService) {}

  onSearchTermChange(searchTerm: string): void {
    this.hotelFilterService.setSearchTerm(searchTerm);
  }

  onStarOptionsChange(starsOptions: FilterCheckbox[]): void {
    this.hotelFilterService.setSelectedStars(starsOptions);
  }

  onRateRangeChange(rateRange: number): void {
    this.hotelFilterService.setRateRange(rateRange);
  }

  onPriceRangeChange(priceRange: number): void {
    this.hotelFilterService.setPriceRange(priceRange);
  }
}

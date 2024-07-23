import { Component } from '@angular/core';
import { FilterCheckbox, FilterRange } from '@app/shared/models/filter.model';
import { HotelFilterService } from '../../services/hotel-filter/hotel-filter.service';
import {
  filterPriceOptions,
  filterRateOptions,
  filterStarOptions,
} from '../../constants/hotel-filter';
import { FilterSearchComponent } from '@app/shared/components/filter-search/filter-search.component';
import { FilterRangeComponent } from '@app/shared/components/filter-range/filter-range.component';
import { FilterCheckboxComponent } from '@app/shared/components/filter-checkbox/filter-checkbox.component';

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

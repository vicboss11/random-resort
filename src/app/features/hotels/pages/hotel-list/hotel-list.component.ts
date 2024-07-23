import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelItemComponent } from '../../components/hotel-item/hotel-item.component';
import { HotelFilterComponent } from '../../components/hotel-filter/hotel-filter.component';
import { HotelService } from '../../services/hotel/hotel.service';
import { HotelFilterService } from '../../services/hotel-filter/hotel-filter.service';
import { PaginationComponent } from '@app/shared/components/pagination/pagination.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HotelItemComponent,
    HotelFilterComponent,
    PaginationComponent,
  ],
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss'],
})
export default class HotelListComponent implements OnInit {
  hotels = this.hotelService.hotels;
  filteredHotels = this.hotelFilterService.filteredHotels;

  totalItems = this.hotelFilterService.totalItems;
  currentPage = this.hotelFilterService.currentPage;
  itemsPerPage = this.hotelFilterService.itemsPerPage;

  constructor(
    private readonly hotelService: HotelService,
    private readonly hotelFilterService: HotelFilterService
  ) {}

  ngOnInit(): void {
    this.hotelService.loadHotels().subscribe((hotels) => {
      this.hotels.set(hotels);
      this.filteredHotels.set(hotels);

      this.hotelFilterService.applyFilters();
    });
  }

  onPageChange(page: number): void {
    this.hotelFilterService.setCurrentPage(page);
  }
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hotel } from '@features/hotels/models/hotel.model';

@Component({
  selector: 'app-hotel-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotel-item.component.html',
})
export class HotelItemComponent {
  @Input() hotel!: Hotel;
}

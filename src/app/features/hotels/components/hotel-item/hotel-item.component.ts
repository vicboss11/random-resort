import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hotel } from '@features/hotels/models/hotel.model';
import { ScoreComponent } from '@app/shared/components/score/score.component';
import { StarsComponent } from '@app/shared/components/stars/stars.component';

@Component({
  selector: 'app-hotel-item',
  standalone: true,
  imports: [CommonModule, StarsComponent, ScoreComponent],
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.scss'],
})
export class HotelItemComponent {
  @Input() hotel!: Hotel;
}

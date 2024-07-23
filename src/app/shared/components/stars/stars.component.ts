import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stars.component.html',
})
export class StarsComponent {
  @Input() totalStars!: number;

  get stars(): number[] {
    return new Array(this.totalStars);
  }
}

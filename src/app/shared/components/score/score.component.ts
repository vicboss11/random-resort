import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Colors {}

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './score.component.html',
})
export class ScoreComponent {
  @Input() score!: number;

  get colorClass(): string {
    if (this.score < 2.5) {
      return 'text-red-500 border-red-500';
    }

    if (this.score < 4) {
      return 'text-amber-400 border-amber-400';
    }

    return 'text-green-400 border-green-400';
  }
}

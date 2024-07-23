import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-range',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter-range.component.html',
})
export class FilterRangeComponent implements OnInit {
  @Input() element?: string;
  @Input() title?: string;
  @Input() min!: number;
  @Input() max!: number;
  @Input() defaultValue: number = 0;
  @Input() step: number = 1;
  @Output() rangeChange: EventEmitter<number> = new EventEmitter<number>();

  rangeValue!: number;

  ngOnInit(): void {
    this.rangeValue = this.defaultValue;
  }

  onRangeChange(event: any): void {
    this.rangeChange.emit(event.target.value);
  }
}

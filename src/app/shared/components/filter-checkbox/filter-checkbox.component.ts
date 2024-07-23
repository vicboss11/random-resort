import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterCheckbox } from '@app/shared/models/filter.model';

@Component({
  selector: 'app-filter-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './filter-checkbox.component.html',
})
export class FilterCheckboxComponent {
  private selectedFilterOptions: FilterCheckbox[] = [];

  @Input() title?: string;
  @Input() filterOptions!: FilterCheckbox[];
  @Output() filterOptionsChange: EventEmitter<FilterCheckbox[]> =
    new EventEmitter<FilterCheckbox[]>();

  onCheckboxChange(option: FilterCheckbox, event: any): void {
    if (event.target.checked) {
      this.selectedFilterOptions.push(option);
    } else {
      this.selectedFilterOptions = this.selectedFilterOptions.filter(
        (selectedOption) => selectedOption.value !== option.value
      );
    }

    this.filterOptionsChange.emit(this.selectedFilterOptions);
  }
}

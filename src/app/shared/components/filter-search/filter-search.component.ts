import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter-search.component.html',
})
export class FilterSearchComponent {
  searchTerm = '';

  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();

  onSearchTermChange() {
    this.searchChange.emit(this.searchTerm);
  }
}

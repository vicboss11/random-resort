import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRangeComponent } from './filter-range.component';

describe('FilterRangeComponent', () => {
  let component: FilterRangeComponent;
  let fixture: ComponentFixture<FilterRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterRangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

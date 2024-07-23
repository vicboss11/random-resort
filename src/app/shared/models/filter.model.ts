export interface FilterCheckbox {
  name: string;
  value: number;
}

export interface FilterRange {
  min: number;
  max: number;
  default?: number;
  step?: number;
}

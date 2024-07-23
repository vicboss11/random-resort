import { FilterCheckbox, FilterRange } from '@app/shared/models/filter.model';

export const filterStarOptions: FilterCheckbox[] = [
  {
    name: '5 estrellas',
    value: 5,
  },
  {
    name: '4 estrellas',
    value: 4,
  },
  {
    name: '3 estrellas',
    value: 3,
  },
  {
    name: '2 estrellas',
    value: 2,
  },
  {
    name: '1 estrellas',
    value: 1,
  },
];

export const filterRateOptions: FilterRange = {
  min: 0,
  max: 5,
  default: 0,
  step: 0.1,
};

export const filterPriceOptions: FilterRange = {
  min: 50,
  max: 1000,
  default: 1000,
  step: 10,
};

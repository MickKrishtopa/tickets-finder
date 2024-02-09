export interface IChange {
  withChange: {
    one: boolean;
    two: boolean;
  };
  withoutChange: boolean;
}

export interface IPriceInterval {
  min: string;
  max: string;
}

export type SortType = 'incCost' | 'decCost' | 'time' | '';

// Define a type for the slice state
export interface ISideBarState {
  sort: SortType;
  change: IChange;
  priceInterval: IPriceInterval;
  company: string[];
}

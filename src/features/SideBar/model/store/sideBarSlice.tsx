import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../../../../store/store';

import { IChange, IPriceInterval, SortType, ISideBarState } from '../types/types';

// Define the initial state using that type
const initialState: ISideBarState = {
  sort: '',
  change: {
    withChange: {
      one: false,
      two: false,
    },
    withoutChange: false,
  },
  priceInterval: {
    min: '',
    max: '',
  },
  company: [],
};

export const sideBarSlice = createSlice({
  name: 'sideBar',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<SortType>) => {
      state.sort = action.payload;
    },
    setPriceInterval: (state, action: PayloadAction<IPriceInterval>) => {
      state.priceInterval = action.payload;
    },
    setChange: (state, action: PayloadAction<IChange>) => {
      state.change = action.payload;
    },
    setCompany: (state, action: PayloadAction<string[]>) => {
      state.company = action.payload;
    },
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { setSort, setPriceInterval, setChange, setCompany } = sideBarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default sideBarSlice.reducer;

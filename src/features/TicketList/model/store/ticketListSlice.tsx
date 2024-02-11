import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../../../../store/store';

interface IMinMaxPrice {
  min: number;
  max: number;
}

interface IInitialState {
  ticketData: [];
  carrierList: string[];
  minMaxPrice: IMinMaxPrice;
}
const initialState: IInitialState = {
  ticketData: [],
  carrierList: [],
  minMaxPrice: {
    min: 0,
    max: 0,
  },
};

export const ticketListSlice = createSlice({
  name: 'ticketList',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTicketListData: (state, action: PayloadAction<any>) => {
      state.ticketData = action.payload;
    },
    setCarrierList: (state, action: PayloadAction<string[]>) => {
      state.carrierList = action.payload;
    },
    setMinMaxPrice: (state, action: PayloadAction<IMinMaxPrice>) => {
      state.minMaxPrice = action.payload;
    },
  },
});

export const { setTicketListData, setCarrierList, setMinMaxPrice } =
  ticketListSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default ticketListSlice.reducer;

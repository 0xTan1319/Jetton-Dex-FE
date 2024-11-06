import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExchangeFormState {
  tokenA: object;
  tokenB: object;
}

export const tokenInitialState = {
  amount: null,
  currency: null,
  balance: 1000
};

const initialState = {
  tokenA: { ...tokenInitialState },
  tokenB: { ...tokenInitialState }
} as ExchangeFormState;

const exchangeFormSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    updateTokenA: (state, action: PayloadAction<object>) => {
      state.tokenA = { ...state.tokenA, ...action.payload };
    },
    updateTokenB: (state, action: PayloadAction<object>) => {
      state.tokenB = { ...state.tokenB, ...action.payload };
    }
  }
});

export const {
  reducer,
  actions: { updateTokenA, updateTokenB }
} = exchangeFormSlice;

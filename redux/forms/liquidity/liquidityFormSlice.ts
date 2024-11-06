import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LiquidityFormState {
  tokenA: object;
  tokenB: object;
}

export const tokenInitialState = {
  amount: null,
  currency: null,
  balance: 0
};

const initialState = {
  tokenA: { ...tokenInitialState },
  tokenB: { ...tokenInitialState }
} as LiquidityFormState;

const liquidityFormSlice = createSlice({
  name: 'liquidity',
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
} = liquidityFormSlice;

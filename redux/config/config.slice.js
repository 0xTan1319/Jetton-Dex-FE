/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { config } from '../../utils/constants/config';

const initialState = {
  ...config
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    updateConfigThemeId: (state, { payload }) => {
      // eslint-disable-next-line id-length
      state.theme.id = payload;
    },
    updateConfigModifyVars: (state, { payload }) => {
      state.theme.modifyVars = payload;
    }
  }
});

export const { reducer } = configSlice;
export const { updateConfigThemeId, updateConfigModifyVars } =
  configSlice.actions;

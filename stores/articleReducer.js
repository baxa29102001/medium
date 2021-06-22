import { createSlice } from '@reduxjs/toolkit';

const loadingObj = {
  status: '',
  data: null,
  error: null,
};

const articleSlice = createSlice({
  name: 'article',
  initialState: loadingObj,
  reducers: {
    pending: (state) => {
      state.status = 'pending';
    },
    success: (state, action) => {
      state.status = 'success';
      state.data = action.payload;
    },
    errHandler: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },
  },
});

export const articleActions = articleSlice.actions;
export default articleSlice;

import { createSlice } from '@reduxjs/toolkit';

const obj = {
  isLogged: false,
  token: '',
  notify: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: obj,
  reducers: {
    login: (state, action) => {
      const token = action.payload.data.token;
      localStorage.setItem('token', token);
      state.isLogged = true;
      state.token = token;
      state.notify = {
        status: action.payload.status,
        data: action.payload.data,
        error: action.payload.error,
      };
    },
    logout: (state) => {
      localStorage.removeItem('token');
      state.isLogged = false;
      state.token = '';
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;

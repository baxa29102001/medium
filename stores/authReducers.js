import { createSlice } from '@reduxjs/toolkit';

const obj = {
  token: typeof document !== 'undefined' ? localStorage.getItem('token') : '',
  isLogged: '',
  notify: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: obj,
  reducers: {
    actionDefault: (state) => {
      const local =
        typeof document !== 'undefined' ? localStorage.getItem('token') : '';
      state.isLogged = local;
      const isAuthenticed = !!state.token;
      state.isLogged = isAuthenticed;
    },
    login: (state, action) => {
      const token = action.payload.data.token;
      if (token) {
        localStorage.setItem('token', token);
        state.isLogged = !!token;
        state.token = token;
      }
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
    tokenRequests: (state, action) => {
      state.isLogged = !!state.token;
      state.notify = {
        status: action.payload.status,
        data: action.payload.data,
        error: action.payload.error,
      };
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;

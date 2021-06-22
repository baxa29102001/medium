import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authReducers';
import articleSlice from './articleReducer';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    articles: articleSlice.reducer,
  },
});
export default store;

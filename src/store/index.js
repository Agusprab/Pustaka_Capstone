/* eslint-disable import/no-unresolved */
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import kategoriReducer from '../features/kategoriSlice';
import bookReducer from '../features/bookSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    kategori: kategoriReducer,
    book: bookReducer,
  },
});

export default store;

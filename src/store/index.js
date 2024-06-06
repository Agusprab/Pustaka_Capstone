/* eslint-disable import/no-unresolved */
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import kategoriReducer from '../features/kategoriSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    kategori: kategoriReducer,
  },
});

export default store;

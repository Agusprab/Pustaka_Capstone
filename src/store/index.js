/* eslint-disable import/no-unresolved */
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import kategoriReducer from '../features/kategoriSlice';
import bookReducer from '../features/bookSlice';
import userReducer from '../features/userSlice';
import peminjamanReducer from '../features/peminjamanSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    kategori: kategoriReducer,
    book: bookReducer,
    users: userReducer,
    peminjaman: peminjamanReducer,
  },
});

export default store;

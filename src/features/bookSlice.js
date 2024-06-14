/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../config/index';

const initialState = {
  book: null,
  isError: false,
  isSuccess: false,
  isLoadingBook: false,
  message: '',
};

export const getAllBook = createAsyncThunk('getBook', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const getKategoriById = createAsyncThunk('getKategoriById', async (uuid, thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}/kategori/${uuid}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const addBook = createAsyncThunk('addBook', async (newBook, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/book`, {
      judul: newBook.judul,
      penulis: newBook.penulis,
      penerbit: newBook.penerbit,
      cover: newBook.cover,
      sinopsis: newBook.sinopsis,
      tahun_terbit: newBook.tahun_terbit,
      qty: newBook.qty,
      kategoriId: newBook.kategoriId,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const deleteBookById = createAsyncThunk('deleteBookById', async (uuid, thunkAPI) => {
  try {
    const response = await axios.delete(`${API_URL}/book/${uuid}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const updateBookById = createAsyncThunk('updateBookById', async (newBook, thunkAPI) => {
  try {
    const response = await axios.patch(`${API_URL}/book/${newBook.uuid}`, {
      judul: newBook.judul,
      penulis: newBook.penulis,
      penerbit: newBook.penerbit,
      cover: newBook.cover,
      sinopsis: newBook.sinopsis,
      tahun_terbit: newBook.tahun_terbit,
      qty: newBook.qty,
      kategoriId: newBook.kategoriId,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllBook.pending, (state) => {
      state.isLoadingBook = true;
    });
    builder.addCase(getAllBook.fulfilled, (state, action) => {
      state.isLoadingBook = false;
      state.isSuccess = true;
      state.book = action.payload;
    });
    builder.addCase(getAllBook.rejected, (state, action) => {
      state.isLoadingBook = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Get kateogri by id
    builder.addCase(getKategoriById.pending, (state) => {
      state.isLoadingBook = true;
    });
    builder.addCase(getKategoriById.fulfilled, (state, action) => {
      state.isLoadingBook = false;
      state.isSuccess = true;
      state.kategori = action.payload;
      state.book = action.payload;
    });
    builder.addCase(getKategoriById.rejected, (state, action) => {
      state.isLoadingBook = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Add kategori
    builder.addCase(addBook.pending, (state) => {
      state.isLoadingBook = true;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.isLoadingBook = false;
      state.isSuccess = true;
      state.message = action.payload;
    });
    builder.addCase(addBook.rejected, (state, action) => {
      state.isLoadingBook = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Get kateogri by id
    builder.addCase(deleteBookById.pending, (state) => {
      state.isLoadingBook = true;
    });
    builder.addCase(deleteBookById.fulfilled, (state, action) => {
      state.isLoadingBook = false;
      state.isSuccess = true;
      state.message = action.payload;
    });
    builder.addCase(deleteBookById.rejected, (state, action) => {
      state.isLoadingBook = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Update kategori
    builder.addCase(updateBookById.pending, (state) => {
      state.isLoadingBook = true;
    });
    builder.addCase(updateBookById.fulfilled, (state, action) => {
      state.isLoadingBook = false;
      state.isSuccess = true;
      state.message = action.payload;
    });
    builder.addCase(updateBookById.rejected, (state, action) => {
      state.isLoadingBook = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export default bookSlice.reducer;
export const { reset } = bookSlice.actions;

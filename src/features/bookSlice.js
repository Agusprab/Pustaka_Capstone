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
  isLoading: false,
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

export const addBook = createAsyncThunk('addBook', async (input, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/book`, {
      judul: input.judul,
      penulis: input.penulis,
      penerbit: input.penerbit,
      cover: input.cover,
      sinopsis: input.sinposis,
      tahun_terbit: input.tahun_terbit,
      qty: input.qty,
      kategoriId: input.kategoriId,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const deleteKategoriById = createAsyncThunk('deleteKategoriById', async (uuid, thunkAPI) => {
  try {
    const response = await axios.delete(`${API_URL}/kategori/${uuid}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const updateKategoriById = createAsyncThunk('updateKategoriById', async (input, thunkAPI) => {
  try {
    const response = await axios.patch(`${API_URL}/kategori/${input.uuid}`, {
      name: input.name,
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
      state.isLoading = true;
    });
    builder.addCase(getAllBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.book = action.payload;
    });
    builder.addCase(getAllBook.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Get kateogri by id
    builder.addCase(getKategoriById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getKategoriById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.kategori = action.payload;
      state.book = action.payload;
    });
    builder.addCase(getKategoriById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Add kategori
    builder.addCase(addBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload;
    });
    builder.addCase(addBook.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Get kateogri by id
    builder.addCase(deleteKategoriById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteKategoriById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload;
    });
    builder.addCase(deleteKategoriById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Update kategori
    builder.addCase(updateKategoriById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateKategoriById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload;
    });
    builder.addCase(updateKategoriById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export default bookSlice.reducer;
export const { reset } = bookSlice.actions;

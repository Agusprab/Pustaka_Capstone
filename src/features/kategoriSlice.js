/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../config/index';

const initialState = {
  kategori: null,
  isError: false,
  isSuccess: false,
  isLoadingKategori: false,
  message: '',
};

export const getAllKategori = createAsyncThunk('getKategori', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}/kategoris`);
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

export const addKategori = createAsyncThunk('addKategori', async (name, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/kategori`, {
      name,
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

export const kategoriSlice = createSlice({
  name: 'kategori',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllKategori.pending, (state) => {
      state.isLoadingKategori = true;
    });
    builder.addCase(getAllKategori.fulfilled, (state, action) => {
      state.isLoadingKategori = false;
      state.isSuccess = true;
      state.kategori = action.payload;
    });
    builder.addCase(getAllKategori.rejected, (state, action) => {
      state.isLoadingKategori = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Get kateogri by id
    builder.addCase(getKategoriById.pending, (state) => {
      state.isLoadingKategori = true;
    });
    builder.addCase(getKategoriById.fulfilled, (state, action) => {
      state.isLoadingKategori = false;
      state.isSuccess = true;
      state.kategori = action.payload;
    });
    builder.addCase(getKategoriById.rejected, (state, action) => {
      state.isLoadingKategori = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Add kategori
    builder.addCase(addKategori.pending, (state) => {
      state.isLoadingKategori = true;
    });
    builder.addCase(addKategori.fulfilled, (state, action) => {
      state.isLoadingKategori = false;
      state.isSuccess = true;
      state.message = action.payload;
    });
    builder.addCase(addKategori.rejected, (state, action) => {
      state.isLoadingKategori = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Get kateogri by id
    builder.addCase(deleteKategoriById.pending, (state) => {
      state.isLoadingKategori = true;
    });
    builder.addCase(deleteKategoriById.fulfilled, (state, action) => {
      state.isLoadingKategori = false;
      state.isSuccess = true;
      state.message = action.payload;
    });
    builder.addCase(deleteKategoriById.rejected, (state, action) => {
      state.isLoadingKategori = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Update kategori
    builder.addCase(updateKategoriById.pending, (state) => {
      state.isLoadingKategori = true;
    });
    builder.addCase(updateKategoriById.fulfilled, (state, action) => {
      state.isLoadingKategori = false;
      state.isSuccess = true;
      state.message = action.payload;
    });
    builder.addCase(updateKategoriById.rejected, (state, action) => {
      state.isLoadingKategori = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export default kategoriSlice.reducer;
export const { reset } = kategoriSlice.actions;

/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../config/index';

const initialState = {
  peminjaman: null,
  isError: false,
  isSuccess: false,
  isLoadingPmj: false,
  messagePeminjaman: '',
};

export const getAllPeminjaman = createAsyncThunk('getPeminjaman', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}/peminjamans`);
    return response.data;
  } catch (error) {
    if (error.response) {
      const messagePeminjaman = error.response.data.msg;
      return thunkAPI.rejectWithValue(messagePeminjaman);
    }
  }
});

export const getKategoriById = createAsyncThunk('getKategoriById', async (uuid, thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}/kategori/${uuid}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      const messagePeminjaman = error.response.data.msg;
      return thunkAPI.rejectWithValue(messagePeminjaman);
    }
  }
});

export const addPeminjaman = createAsyncThunk('addPeminjaman', async (newInput, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/peminjaman`, {
      tanggal_pinjam: newInput.tanggal_pinjam,
      tanggal_kembali: newInput.tanggal_kembali,
      status: newInput.status,
      userId: newInput.userId,
      bookId: newInput.bookId,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const messagePeminjaman = error.response.data.msg;
      return thunkAPI.rejectWithValue(messagePeminjaman);
    }
  }
});

export const deletePeminjamanById = createAsyncThunk('deletePeminjamanById', async (uuid, thunkAPI) => {
  try {
    const response = await axios.delete(`${API_URL}/peminjaman/${uuid}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      const messagePeminjaman = error.response.data.msg;
      return thunkAPI.rejectWithValue(messagePeminjaman);
    }
  }
});

export const updatePeminjamanById = createAsyncThunk('updatePeminjamanById', async (input, thunkAPI) => {
  try {
    const response = await axios.patch(`${API_URL}/peminjaman/${input.uuid}`, {
      tanggal_kembali: input.tanggal_kembali,
      status: input.status,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const messagePeminjaman = error.response.data.msg;
      return thunkAPI.rejectWithValue(messagePeminjaman);
    }
  }
});

export const peminjamanSlice = createSlice({
  name: 'peminjaman',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPeminjaman.pending, (state) => {
      state.isLoadingPmj = true;
    });
    builder.addCase(getAllPeminjaman.fulfilled, (state, action) => {
      state.isLoadingPmj = false;
      state.isSuccess = true;
      state.peminjaman = action.payload;
    });
    builder.addCase(getAllPeminjaman.rejected, (state, action) => {
      state.isLoadingPmj = false;
      state.isError = true;
      state.messagePeminjaman = action.payload;
    });

    // Get kategori by id
    builder.addCase(getKategoriById.pending, (state) => {
      state.isLoadingPmj = true;
    });
    builder.addCase(getKategoriById.fulfilled, (state, action) => {
      state.isLoadingPmj = false;
      state.isSuccess = true;
      state.kategori = action.payload;
      state.book = action.payload;
    });
    builder.addCase(getKategoriById.rejected, (state, action) => {
      state.isLoadingPmj = false;
      state.isError = true;
      state.messagePeminjaman = action.payload;
    });

    // Add peminjaman
    builder.addCase(addPeminjaman.pending, (state) => {
      state.isLoadingPmj = true;
    });
    builder.addCase(addPeminjaman.fulfilled, (state, action) => {
      state.isLoadingPmj = false;
      state.isSuccess = true;
      state.messagePeminjaman = action.payload;
    });
    builder.addCase(addPeminjaman.rejected, (state, action) => {
      state.isLoadingPmj = false;
      state.isError = true;
      state.messagePeminjaman = action.payload;
    });

    // Get kateogri by id
    builder.addCase(deletePeminjamanById.pending, (state) => {
      state.isLoadingPmj = true;
    });
    builder.addCase(deletePeminjamanById.fulfilled, (state, action) => {
      state.isLoadingPmj = false;
      state.isSuccess = true;
      state.messagePeminjaman = action.payload;
    });
    builder.addCase(deletePeminjamanById.rejected, (state, action) => {
      state.isLoadingPmj = false;
      state.isError = true;
      state.messagePeminjaman = action.payload;
    });

    // Update kategori
    builder.addCase(updatePeminjamanById.pending, (state) => {
      state.isLoadingPmj = true;
    });
    builder.addCase(updatePeminjamanById.fulfilled, (state, action) => {
      state.isLoadingPmj = false;
      state.isSuccess = true;
      state.messagePeminjaman = action.payload;
    });
    builder.addCase(updatePeminjamanById.rejected, (state, action) => {
      state.isLoadingPmj = false;
      state.isError = true;
      state.messagePeminjaman = action.payload;
    });
  },
});

export default peminjamanSlice.reducer;
export const { reset } = peminjamanSlice.actions;

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
    isLoading: false,
    message: '',
};

export const getAllPeminjaman = createAsyncThunk('getPeminjaman', async (_, thunkAPI) => {
    try {
        const response = await axios.get(`${API_URL}/peminjamans`);
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

export const addBook = createAsyncThunk('addPeminjaman', async (newInput, thunkAPI) => {
    try {
        const response = await axios.post(`${API_URL}/peminjaman`, {
            judul: newInput.judul,
            penulis: newInput.penulis,
            penerbit: newInput.penerbit,
            cover: newInput.cover,
            sinopsis: newInput.sinposis,
            tahun_terbit: newInput.tahun_terbit,
            qty: newInput.qty,
            kategoriId: newInput.kategoriId,
            bukuId: newInput.bukuId,
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

export const peminjamanSlice = createSlice({
    name: 'peminjaman',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(getAllKategori.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAllKategori.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.book = action.payload;
        });
        builder.addCase(getAllKategori.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // Get kategori by id
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

        // Add peminjaman
        builder.addCase(addPeminjaman.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(addPeminjaman.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(addPeminjaman.rejected, (state, action) => {
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

export default peminjamanSlice.reducer;
export const { reset } = peminjamanSlice.actions;

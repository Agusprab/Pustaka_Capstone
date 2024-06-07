/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../config/index';

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const getAllUsers = createAsyncThunk('getUser', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}/users`);
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

export const addUser = createAsyncThunk('addUser', async (
  name,
  email,
  password,
  jenisKelamin,
  alamat,
  noTlp,
  role,
  thunkAPI,
) => {
  try {
    const response = await axios.post(`${API_URL}/users`, {
      name,
      email,
      password,
      jenisKelamin,
      alamat,
      noTlp,
      role,
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

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.users = action.payload;
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
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
    });
    builder.addCase(getKategoriById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Add kategori
    builder.addCase(addUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload;
    });
    builder.addCase(addUser.rejected, (state, action) => {
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

export default userSlice.reducer;
export const { reset } = userSlice.actions;

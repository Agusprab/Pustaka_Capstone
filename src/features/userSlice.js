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

export const getUserById = createAsyncThunk('getUserById', async (uuid, thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}/users/${uuid}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const addUser = createAsyncThunk('addUser', async (newUser, thunkAPI) => {
  try {
    const response = await axios.post(`${API_URL}/users`, {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      jenisKelamin: newUser.jenisKelamin,
      alamat: newUser.alamat,
      noTlp: newUser.noTlp,
      role: newUser.role,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const deleteUserById = createAsyncThunk('deleteUserById', async (uuid, thunkAPI) => {
  try {
    const response = await axios.delete(`${API_URL}/users/${uuid}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const updateUserById = createAsyncThunk('updateUserById', async (newUser, thunkAPI) => {
  try {
    const response = await axios.patch(`${API_URL}/users/${newUser.uuid}`, {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      confPassword: newUser.password,
      jenisKelamin: newUser.jenisKelamin,
      alamat: newUser.alamat,
      noTlp: newUser.noTlp,
      role: newUser.role,
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
    builder.addCase(getUserById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.users = action.payload;
    });
    builder.addCase(getUserById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Add User
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
    builder.addCase(deleteUserById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteUserById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload;
    });
    builder.addCase(deleteUserById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Update kategori
    builder.addCase(updateUserById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUserById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload;
    });
    builder.addCase(updateUserById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export default userSlice.reducer;
export const { reset } = userSlice.actions;

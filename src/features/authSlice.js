import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../config/api";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export default authSlice.reducer;

// Async action for login
export const login = (credentials) => async (dispatch) => {
  dispatch(loginStart());
  try {
    // const response = await axios.post(
    //   "http://localhost:3100/api/v1/auth/login",
    //   credentials
    // ); // Your API URL here

    const response = await api.post("/users/login", credentials);
    const userData = response.data;
    localStorage.setItem("token", userData.token);
    dispatch(loginSuccess(userData));
  } catch (error) {
    dispatch(loginFailure(error.response?.data?.message || "Failed to login"));
  }
};

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser } from "./loginApi";

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false,
};

export const loginUserAsync = createAsyncThunk(
    "login/loginUser",
    async () => {
        const response = await loginUser();
        return response.data;
    }
);

export const logoutUserAsync = createAsyncThunk(
    "login/logoutUser",
    async () => {
        const response = await logoutUser();
        return response.data;
    }
);

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUserAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUserAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(logoutUserAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(logoutUserAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.user = {};
            });
    }
});

export const selectLogin = (state) => state.login;

export default loginSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import registerUser from "./registerApi";

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false,
};

export const registerUserAsync = createAsyncThunk(
    "register/registerUser",
    async () => {
        const response = await registerUser();
        return response.data;
    }
);

export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUserAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerUserAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            });
    }
});

export const selectRegister = (state) => state.register;

export default registerSlice.reducer;



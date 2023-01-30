import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import registerUser from "./registerApi";
import axios from "axios";

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false,
};

// export const registerUserAsync = createAsyncThunk(
//     "register/registerUser",
//     async () => {
//         const response = await registerUser();
//         console.log(response.data);
//         return response.data;
//     }
// );

export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        registerUser: (state, action) => {
            state.loading = true;
            axios
                .post("/api/users/register", action.payload)
                .then((res) => {
                    state.loading = false;
                    state.isAuthenticated = true;
                    state.user = res.data;
                })
                .catch((err) => {
                    state.loading = false;
                    state.isAuthenticated = false;
                    state.user = err.response.data;
                });
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(registerUserAsync.pending, (state) => {
    //             state.loading = true;
    //         })
    //         .addCase(registerUserAsync.fulfilled, (state, action) => {
    //             state.loading = false;
    //             state.isAuthenticated = true;
    //             state.user = action.payload;
    //         });
    // }
});

export const selectRegister = (state) => state.register;

export const { registerUser } = registerSlice.actions;

export default registerSlice.reducer;



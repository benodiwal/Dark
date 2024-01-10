import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    // token: localStorage.getItem("token") || null,
    token: null,
}

export const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        setLogout: (state, _action) => {
            state.token = null;
            state.user = null;
        }
    }
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVisible: false,
}

export const dropDownSlice = createSlice({
    name: "dropDown",
    initialState,
    reducers: {
        toggle: (state, _action) => {
          state.isVisible = !state.isVisible  
        }
    }
});

export const { toggle } = dropDownSlice.actions;
export default dropDownSlice.reducer;
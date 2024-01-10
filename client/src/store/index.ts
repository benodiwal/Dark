import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth";
import dropDownReducer from "../features/dropdown";

export default configureStore({
    reducer: {
        user: authReducer, 
        dropDown: dropDownReducer
    }
});
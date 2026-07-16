import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";

const store = configureStore({
    reducer:{
        library:bookReducer
    }

});

export default store;
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: {
    /* the slice.reducer method is automatically set by Redux Toolkit to call 
       every method in the defined reducers */
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;

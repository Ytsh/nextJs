import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartReducers from "../reducers/cartReducer";


const store = configureStore({
    reducer: {
      cart: cartReducers,
    },
  });
  
  export default store;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;

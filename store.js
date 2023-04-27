import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./src/features/counterSlice";
import urlSlice from "./src/features/fetchSlice";


export const store = configureStore({ reducer:{
    counter:counterSlice.reducer,
    fetch:urlSlice.reducer
}
})
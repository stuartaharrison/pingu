import { configureStore } from "@reduxjs/toolkit";
import { storeApi } from "./api";

export default configureStore({
    reducer: {
        [storeApi.reducerPath]: storeApi.reducer
    },
    middleware: (gDm) => gDm().concat(storeApi.middleware) 
});
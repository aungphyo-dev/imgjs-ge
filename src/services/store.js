import { configureStore } from '@reduxjs/toolkit'
import {api} from "./api.js";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

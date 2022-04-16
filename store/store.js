import { configureStore } from "@reduxjs/toolkit";
import { fetcherApi } from "./fetcherApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import notSignSlice from "./not-sign-slice";

const store = configureStore({
  reducer: { [fetcherApi.reducerPath]: fetcherApi.reducer, notSign: notSignSlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetcherApi.middleware),
});
setupListeners(store.dispatch);

export default store;

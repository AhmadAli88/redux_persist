import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import favReducer from "../features/favMovieSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["favorites"],
  timeout: 2000, // Increase the timeout to 20 seconds
};


// Combine reducers
const rootReducer = combineReducers({
  favorites: favReducer,
});

// Persist the root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Setup persistor for Redux-Persist
export const persistor = persistStore(store);

// Type definitions
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

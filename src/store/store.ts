import { configureStore, combineReducers } from '@reduxjs/toolkit';

import galleryReducer from '@/store/gallery/slice';

const rootReducer = combineReducers({
  gallery: galleryReducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

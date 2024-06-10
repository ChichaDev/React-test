import { createSlice } from '@reduxjs/toolkit';

import type { Gallery } from '@/types';
import type { AsyncThunkStatus } from '@/types/slice';

import { fetchMoreNews, fetchGalleryItems } from './action';

export type GallerySlice = {
  status: AsyncThunkStatus;
  galleryList: Gallery[];
};

const initialState: GallerySlice = {
  status: 'idle',
  galleryList: []
};

const gallerySlice = createSlice({
  name: '@gallery',
  initialState,
  reducers: {
    removeNews(state, action) {
      state.galleryList = state.galleryList.filter((item) => item.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGalleryItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGalleryItems.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.galleryList = action.payload;
      })
      .addCase(fetchGalleryItems.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(fetchMoreNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMoreNews.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.galleryList = [...state.galleryList, ...action.payload];
      })
      .addCase(fetchMoreNews.rejected, (state) => {
        state.status = 'rejected';
      });
  }
});

export const { removeNews } = gallerySlice.actions;
export default gallerySlice.reducer;

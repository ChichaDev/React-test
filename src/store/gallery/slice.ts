import { createSlice } from '@reduxjs/toolkit';

import type { Gallery } from '@/types';
import type { AsyncThunkStatus } from '@/types/slice';

import { fetchGalleryItems } from './action';

export type GallerySlice = {
  status: AsyncThunkStatus;
  galleryList: Gallery[];
  selectedCategory: string;
};

const initialState: GallerySlice = {
  status: 'idle',
  galleryList: [],
  selectedCategory: 'all'
};

const gallerySlice = createSlice({
  name: '@gallery',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.selectedCategory = action.payload;
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
      });
  }
});

export const { setCategory } = gallerySlice.actions;
export default gallerySlice.reducer;

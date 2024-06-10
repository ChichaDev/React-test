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
    // removeNews(state, action) {
    //   state.galleryList = state.galleryList.filter((item) => item.id !== action.payload);
    // }
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
    // .addCase(fetchGalleryItemsByCategory.pending, (state) => {
    //   state.status = 'loading';
    // })
    // .addCase(fetchGalleryItemsByCategory.fulfilled, (state, action) => {
    //   state.status = 'resolved';
    //   // state.galleryList = [...state.galleryList, ...action.payload];
    //   state.galleryList = action.payload;
    // })
    // .addCase(fetchGalleryItemsByCategory.rejected, (state) => {
    //   state.status = 'rejected';
    // });
  }
});

export const { setCategory } = gallerySlice.actions;
export default gallerySlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

import type { Gallery } from '@/types';
import type { AsyncThunkStatus } from '@/types/slice';

import { fetchMoreNews, fetchNews } from './action';

export type GallerySlice = {
  status: AsyncThunkStatus;
  newsList: Gallery[];
  countNews: number;
};

const initialState: GallerySlice = {
  status: 'idle',
  newsList: [],
  countNews: 5
};

const gallerySlice = createSlice({
  name: '@news',
  initialState,
  reducers: {
    removeNews(state, action) {
      state.newsList = state.newsList.filter((item) => item.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.newsList = action.payload;
      })
      .addCase(fetchNews.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(fetchMoreNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMoreNews.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.newsList = [...state.newsList, ...action.payload];
        state.countNews = state.countNews + 5;
      })
      .addCase(fetchMoreNews.rejected, (state) => {
        state.status = 'rejected';
      });
  }
});

export const { removeNews } = gallerySlice.actions;
export default gallerySlice.reducer;

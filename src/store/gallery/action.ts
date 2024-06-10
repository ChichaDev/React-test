import { createAsyncThunk } from '@reduxjs/toolkit';

import type { Gallery } from '@/types';

import type { GallerySlice } from './slice';

export const fetchNews = createAsyncThunk<
  Gallery[],
  undefined,
  { state: { gallery: GallerySlice } }
>(
  'news/fetchNews',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?&_limit=5');
    return (await response.json()) as Gallery[];
  },
  {
    condition: (_, { getState }) => {
      const { status } = getState().gallery;

      if (status === 'loading') {
        return false;
      }
    }
  }
);

export const fetchMoreNews = createAsyncThunk<
  Gallery[],
  number,
  { state: { gallery: GallerySlice } }
>(
  'news/fetchMoreNews',
  async (start = 0) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=5`
    );
    return (await response.json()) as Gallery[];
  },
  {
    condition: (_, { getState }) => {
      const { status } = getState().gallery;

      if (status === 'loading') {
        return false;
      }
    }
  }
);

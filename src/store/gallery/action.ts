import { createAsyncThunk } from '@reduxjs/toolkit';

import type { Gallery } from '@/types';

import type { GallerySlice } from './slice';

type ApiResponse = {
  hits: Gallery[];
};
export const fetchGalleryItems = createAsyncThunk<
  Gallery[],
  { page: number; perPage: number },
  { state: { gallery: GallerySlice } }
>(
  'gallery/fetchGalleryItems',
  async ({ page = 1, perPage = 10 }) => {
    const response = await fetch(
      `https://pixabay.com/api/?key=44311923-5b47cad41e8ce70a1755fc6bf&page=${page}&per_page=${perPage}`
    );
    const data: ApiResponse = await response.json();
    return data.hits;
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
  { start: number; limit: number },
  { state: { gallery: GallerySlice } }
>(
  'news/fetchMoreNews',
  async ({ start = 10, limit = 10 }) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`
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

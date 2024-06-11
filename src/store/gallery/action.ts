import { createAsyncThunk } from '@reduxjs/toolkit';

import type { Gallery } from '@/types';

import type { GallerySlice } from './slice';

type ApiResponse = {
  hits: Gallery[];
};

type FetchGalleryItemsOptions = {
  page: number;
  perPage: number;
  imageType?: string;
};

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const fetchGalleryItems = createAsyncThunk<
  Gallery[],
  FetchGalleryItemsOptions,
  { state: { gallery: GallerySlice } }
>(
  'gallery/fetchGalleryItems',
  async ({ page = 1, perPage = 10, imageType = 'all' }) => {
    let url = `${apiUrl}?key=${apiKey}&page=${page}&per_page=${perPage}`;
    if (imageType) {
      url += `&image_type=${imageType}`;
    }

    const response = await fetch(url);
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

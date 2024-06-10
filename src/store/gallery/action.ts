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
export const fetchGalleryItems = createAsyncThunk<
  Gallery[],
  FetchGalleryItemsOptions,
  { state: { gallery: GallerySlice } }
>(
  'gallery/fetchGalleryItems',
  async ({ page = 1, perPage = 10, imageType = 'all' }) => {
    let url = `https://pixabay.com/api/?key=44311923-5b47cad41e8ce70a1755fc6bf&page=${page}&per_page=${perPage}`;
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
// export const fetchGalleryItemsByCategory = createAsyncThunk<
//   Gallery[],
//   { image_type: string },
//   { state: { gallery: GallerySlice } }
// >(
//   'news/fetchMoreNews',
//   async ({ image_type }) => {
//     const response = await fetch(
//       `https://pixabay.com/api/?key=44311923-5b47cad41e8ce70a1755fc6bf&image_type=${image_type}`
//     );
//     const data: ApiResponse = await response.json();
//     return data.hits;
//   },
//   {
//     condition: (_, { getState }) => {
//       const { status } = getState().gallery;

//       if (status === 'loading') {
//         return false;
//       }
//     }
//   }
// );

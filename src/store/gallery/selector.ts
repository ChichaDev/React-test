import { createSelector } from 'reselect';

import type { RootState } from '../store';

const galleryState = (state: RootState) => state.gallery;

export const getGallery = createSelector(galleryState, (gallery) => gallery.galleryList);

export const getStatusGallery = (state: RootState) => state.gallery.status;

export const getSelectedCategory = (state: RootState) => state.gallery.selectedCategory;

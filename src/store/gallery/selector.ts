import type { RootState } from '../store';

export const getGallery = (state: RootState) => state.gallery.galleryList;

export const getStatusGallery = (state: RootState) => state.gallery.status;

export const getSelectedCategory = (state: RootState) => state.gallery.selectedCategory;

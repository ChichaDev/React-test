import type { RootState } from '../store';

export const getCountNews = (state: RootState) => state.gallery.countNews;

export const getNews = (state: RootState) => state.gallery.newsList;

export const getStatusNews = (state: RootState) => state.gallery.status;

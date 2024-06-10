import { Grid } from '@mui/material';
import { useEffect } from 'react';

// import { Gallery } from '@/pages/Gallery';
// import { fetchNews, fetchMoreNews } from '@/store/news/actions';
import { fetchMoreNews, fetchNews } from '@/store/gallery/action';
import { getNews } from '@/store/gallery/selector';
import { getCountNews } from '@/store/gallery/selector';
import { getStatusNews } from '@/store/gallery/selector';
import { useAppDispatch, useAppSelector } from '@/store/redux-hook';

import { Loader } from '../status/Loader';
import { CustomBtn } from '../ui/CustomBtn';

// import { GalleryItem } from './GalleryItem';
import { GalleryItem } from './GalleryItem';
import { galleryGridContainer } from './galleryStyles';

export const GalleryList = () => {
  const dispatch = useAppDispatch();

  const newsList = useAppSelector(getNews);
  const countNews = useAppSelector(getCountNews);
  const status = useAppSelector(getStatusNews);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const handleMoreNews = () => {
    dispatch(fetchMoreNews(countNews));
  };

  if (status === 'loading' && !newsList.length) {
    return <Loader />;
  }

  if (status === 'rejected') {
    return (
      <div>
        <h1>An error occured reload the page</h1>
      </div>
    );
  }

  return (
    <Grid container spacing={2} sx={galleryGridContainer}>
      {newsList.map((item) => (
        <GalleryItem key={item.id} {...item} />
      ))}
      <CustomBtn disabled={status === 'loading'} onClick={handleMoreNews}>
        {status === 'loading' ? 'Loading...' : 'Load more'}
      </CustomBtn>
    </Grid>
  );
};

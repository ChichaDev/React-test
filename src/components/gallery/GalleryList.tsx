import { Grid, Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { fetchGalleryItems } from '@/store/gallery/action';
import { getGallery } from '@/store/gallery/selector';
import { getStatusGallery } from '@/store/gallery/selector';
import { useAppDispatch, useAppSelector } from '@/store/redux-hook';

import { Loader } from '../status/Loader';

// import { CustomBtn } from '../ui/CustomBtn';
import { GalleryItem } from './GalleryItem';
import { galleryGridContainer } from './galleryStyles';

export const GalleryList = () => {
  const dispatch = useAppDispatch();

  const galleryList = useAppSelector(getGallery);
  const status = useAppSelector(getStatusGallery);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);

  useEffect(() => {
    dispatch(fetchGalleryItems({ page: page, perPage: 10 }));
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [dispatch, page]);

  if (status === 'loading' && !galleryList.length) {
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
    <>
      <Grid container spacing={2} sx={galleryGridContainer}>
        {galleryList.map((item) => (
          <GalleryItem key={item.id} {...item} />
        ))}
      </Grid>
      <Stack spacing={2} alignItems='center' justifyContent='center' mt={4} mb={4}>
        <Pagination
          page={page}
          count={10}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/${item.page === 1 ? '' : `?page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </Stack>
    </>
  );
};

{
  /* <CustomBtn disabled={status === 'loading'} onClick={handleMoreNews}>
        {status === 'loading' ? 'Loading...' : 'Load more'}
      </CustomBtn> */
}

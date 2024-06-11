import { Grid } from '@mui/material';

import { getGallery } from '@/store/gallery/selector';
import { getStatusGallery } from '@/store/gallery/selector';
import { useAppSelector } from '@/store/redux-hook';

import { Loader } from '../ui/status/Loader';

import { GalleryItem } from './GalleryItem';
import { galleryGridContainer } from './galleryStyles';

export const GalleryList = () => {
  const galleryList = useAppSelector(getGallery);
  const status = useAppSelector(getStatusGallery);

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
    </>
  );
};

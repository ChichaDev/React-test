import { Container, Typography } from '@mui/material';

import { Filters } from '@/components/filters/Filters';
import { GalleryList } from '@/components/gallery/GalleryList';

import { galleryContainer, galleryStyles } from './pageStyles';

export const Gallery = () => {
  return (
    <Container sx={galleryContainer}>
      <Typography variant='h5' noWrap sx={galleryStyles}>
        Gallery
      </Typography>
      <Filters />
      <GalleryList />
    </Container>
  );
};

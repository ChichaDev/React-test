import { Container, Typography } from '@mui/material';

import { Filters } from '@/components/filters/Filters';
import { GalleryList } from '@/components/gallery/GalleryList';
import { PaginationList } from '@/components/pagination/PaginationList';
import { getSelectedCategory } from '@/store/gallery/selector';
import { useAppSelector } from '@/store/redux-hook';

import { galleryContainer, galleryStyles } from './pageStyles';

export const Gallery = () => {
  const selectedCategory = useAppSelector(getSelectedCategory);

  return (
    <Container sx={galleryContainer}>
      <Typography variant='h3' noWrap sx={galleryStyles}>
        {selectedCategory}
      </Typography>
      <Filters />
      <GalleryList />
      <PaginationList />
    </Container>
  );
};

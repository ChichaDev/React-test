import { Grid } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { fetchGalleryItems } from '@/store/gallery/action';
import { setCategory } from '@/store/gallery/slice';
import { useAppDispatch } from '@/store/redux-hook';

import { CustomBtn } from '../ui/CustomBtn';

import { filterGridContainer } from './filterStyles';

export const Filters = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const dispatch = useAppDispatch();

  const categories = ['all', 'photo', 'illustration', 'vector'];

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);

  const handleImageCategory = (image_type: string) => {
    dispatch(setCategory(image_type));
    dispatch(fetchGalleryItems({ page: page, perPage: 10, imageType: image_type }));
    setActiveCategory(image_type);
  };

  return (
    <>
      <Grid container spacing={2} sx={filterGridContainer}>
        <ButtonGroup variant='contained' aria-label='Basic button group'>
          {categories.map((item, index) => (
            <CustomBtn
              key={index}
              onClick={() => handleImageCategory(item)}
              disabled={item === activeCategory}
            >
              {item}
            </CustomBtn>
          ))}
        </ButtonGroup>
      </Grid>
    </>
  );
};

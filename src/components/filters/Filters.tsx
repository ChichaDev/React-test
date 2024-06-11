import { Grid } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';

import { categories } from '@/constants/categories';
import { useQueryParams } from '@/hooks/useQueryParams ';
import { fetchGalleryItems } from '@/store/gallery/action';
import { getSelectedCategory } from '@/store/gallery/selector';
import { setCategory } from '@/store/gallery/slice';
import { useAppDispatch, useAppSelector } from '@/store/redux-hook';

import { CustomBtn } from '../ui/CustomBtn';

import { buttonGroupContainer, filterGridContainer } from './filterStyles';

export const Filters = () => {
  const dispatch = useAppDispatch();

  const selectedCategory = useAppSelector(getSelectedCategory);

  const { page } = useQueryParams();

  const navigate = useNavigate();

  const handleImageCategory = (image_type: string) => {
    dispatch(setCategory(image_type));
    navigate(`/?page=1&image_type=${image_type}`);
    dispatch(fetchGalleryItems({ page: page, perPage: 10, imageType: image_type }));
  };

  return (
    <>
      <Grid container spacing={2} sx={filterGridContainer}>
        <ButtonGroup
          variant='contained'
          aria-label='Basic button group'
          sx={buttonGroupContainer}
        >
          {categories.map((item) => (
            <CustomBtn
              key={item.id}
              onClick={() => handleImageCategory(item.name)}
              disabled={item.name === selectedCategory}
            >
              {item.name}
            </CustomBtn>
          ))}
        </ButtonGroup>
      </Grid>
    </>
  );
};

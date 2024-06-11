import { Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useQueryParams } from '@/hooks/useQueryParams ';
import { fetchGalleryItems } from '@/store/gallery/action';
import { getSelectedCategory } from '@/store/gallery/selector';
import { useAppDispatch, useAppSelector } from '@/store/redux-hook';

export const PaginationList = () => {
  const dispatch = useAppDispatch();

  const imageType = useAppSelector(getSelectedCategory);

  const navigate = useNavigate();
  const { page } = useQueryParams();

  useEffect(() => {
    dispatch(fetchGalleryItems({ page: page, perPage: 10, imageType: imageType }));
    navigate(`/?page=${page}&image_type=${imageType}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [dispatch, page, imageType, navigate]);

  return (
    <Stack spacing={2} alignItems='center' justifyContent='center' mt={4} mb={4}>
      <Pagination
        page={page}
        count={10}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/${item.page === 1 ? '' : `?page=${item.page}`}`}
            {...item}
            disabled={item.page === page}
          />
        )}
      />
    </Stack>
  );
};

import { Card, CardContent, Grid, Typography } from '@mui/material';

import type { Gallery } from '@/types';

import { galleryGridCard, galleryGridItem } from './galleryStyles';

type GalleryItemProps = Pick<Gallery, 'title' | 'body' | 'id'>;

export const GalleryItem = (props: GalleryItemProps) => {
  const { body, title } = props;

  // const dispatch = useAppDispatch();

  // const isLoggedIn = useAppSelector(getIsLoggedInStatus);

  // const handleRemoveNews = () => {
  //   dispatch(removeNews(id));
  // };

  // TODO: text
  return (
    <Grid item xs={12} md={12} sx={galleryGridItem}>
      <Card sx={galleryGridCard}>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {body}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

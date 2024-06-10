import { Card, CardContent, CardMedia, Grid, Typography, Skeleton } from '@mui/material';
import { useState } from 'react';

import type { Gallery } from '@/types';

import { galleryGridCard, galleryGridItem } from './galleryStyles';

type GalleryItemProps = Pick<Gallery, 'largeImageURL' | 'tags' | 'id'>;

export const GalleryItem = (props: GalleryItemProps) => {
  const { largeImageURL, tags } = props;
  const [loaded, setLoaded] = useState(false);

  return (
    <Grid item xs={12} md={12} sx={galleryGridItem}>
      <Card sx={galleryGridCard}>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {tags}
          </Typography>
          {!loaded && <Skeleton variant='rectangular' width='100%' height={350} />}
          <CardMedia
            component='img'
            height='350'
            width='350'
            image={largeImageURL}
            alt={tags}
            onLoad={() => setLoaded(true)}
            style={{ display: loaded ? 'block' : 'none' }}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

import CommentIcon from '@mui/icons-material/Comment';
import DownloadIcon from '@mui/icons-material/Download';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardMedia, Grid, Typography, Skeleton } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

import type { Gallery } from '@/types';

import { galleryGridCard, galleryGridItem } from './galleryStyles';

type GalleryItemProps = Pick<
  Gallery,
  'webformatURL' | 'tags' | 'likes' | 'downloads' | 'comments'
>;

export const GalleryItem = (props: GalleryItemProps) => {
  const { webformatURL, tags, likes, downloads, comments } = props;
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
            image={webformatURL}
            alt={tags}
            onLoad={() => setLoaded(true)}
            style={{ display: loaded ? 'block' : 'none' }}
          />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <Typography component='span'>{likes}</Typography>
          <IconButton aria-label='downloads'>
            <DownloadIcon />
          </IconButton>
          <Typography component='span'>{downloads}</Typography>
          <IconButton aria-label='comments'>
            <CommentIcon />
          </IconButton>
          <Typography component='span'>{comments}</Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};

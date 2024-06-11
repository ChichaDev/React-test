import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';

import { errorLink, errorStyles, errorTypography } from './pageStyles';

export const Error = () => {
  return (
    <Container sx={errorStyles}>
      <Typography variant='body1' noWrap sx={errorTypography}>
        Error 404
      </Typography>
      <Link style={errorLink} to='/'>
        <Button variant='outlined' size='medium'>
          Back to Home
        </Button>
      </Link>
    </Container>
  );
};

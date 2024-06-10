import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const boxStyles = {
  display: 'flex',
  justifyContent: 'center'
};

export const Loader = () => {
  return (
    <Box sx={boxStyles}>
      <CircularProgress />
    </Box>
  );
};

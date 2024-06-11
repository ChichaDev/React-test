export const galleryGridContainer = {
  mt: '1rem',
  display: 'grid',
  gridTemplateColumns: {
    xs: 'repeat(1, 1fr)',
    sm: 'repeat(1, 1fr)',
    md: 'repeat(2, 1fr)'
  },
  gap: '1rem',
  alignItems: 'flex-start'
};

export const galleryGridItem = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: {
    xs: '16px',
    sm: '16px',
    md: '0px !important'
  }
};
export const galleryGridCard = {
  width: '100%'
};

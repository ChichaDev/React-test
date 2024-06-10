import { Menu as MenuIcon } from '@mui/icons-material';
import { Box, Button, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import {
  navMenuBox,
  informLogoSmallScreen,
  navMenu,
  navMenuBoxMain,
  navBtn,
  linkStyles
} from './navStyles';

export const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  // const { t } = useTranslation();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box sx={navMenuBox}>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={handleOpenNavMenu}
          color='inherit'
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id='menu-appbar'
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={navMenu}
        >
          <MenuItem onClick={handleCloseNavMenu}>
            <Link style={linkStyles} to='/main'>
              <Typography textAlign='center'>main</Typography>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <Link style={linkStyles} to='/news'>
              <Typography textAlign='center'>news</Typography>
            </Link>
          </MenuItem>
        </Menu>
      </Box>

      <Typography variant='h5' noWrap component='a' href='' sx={informLogoSmallScreen}>
        {/* {t('inform')} */} inform
      </Typography>

      <Box sx={navMenuBoxMain}>
        <Link style={linkStyles} to='/main'>
          <Button onClick={handleCloseNavMenu} sx={navBtn}>
            {/* {t('main')} */} main
          </Button>
        </Link>
        <Link style={linkStyles} to='/news'>
          <Button onClick={handleCloseNavMenu} sx={navBtn}>
            {/* {t('news')} */} news
          </Button>
        </Link>
      </Box>
    </>
  );
};

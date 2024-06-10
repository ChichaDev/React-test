import { AppBar, Toolbar, Container } from '@mui/material';

// import { UserAuth } from '../auth/UserAuth';

import { Logo } from './logo/Logo';
// import { MultiLanguage } from './multiLanguage/MultiLanguage';
import { Navigation } from './navigation/Navigation';

function Header() {
  return (
    <>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Logo />
            <Navigation />
            {/* <MultiLanguage /> */}
            {/* <UserAuth /> */}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Header;

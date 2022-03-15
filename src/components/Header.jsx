import React from 'react';
import { useLocation } from 'react-router';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import { useMediaQuery } from '@material-ui/core';

import Drawer from './Drawer';
import { useStyles, theme } from '../utils/muiStyles';
import Navbar from './Navbar';
import DatePicker from './DatePicker';

const Header = () => {
  const { pathname } = useLocation();
  const { brandLogo, logoContainer, soccerIcon } = useStyles();
  const mobile = useMediaQuery(theme.breakpoints.down(768));
  const tablet = useMediaQuery(theme.breakpoints.between(768, 1024));

  return (
    <Box component="header" className="header">
      <Container maxWidth="xl">
        <Box
          className={mobile || tablet ? 'header__div__sm' : 'header__div__lg'}
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Box className={logoContainer}>
            <SportsSoccerIcon className={soccerIcon} fontSize="medium" />
            <Typography
              className={brandLogo}
              variant={mobile ? 'h5' : 'h4'}
              component="h1"
              sx={{ fontFamily: "'Lobster', cursive" }}
            >
              <Link href="/" underline="none" color="inherit">
                EchelonBetTips
              </Link>
            </Typography>
          </Box>
          {mobile || tablet ? (
            <Drawer pathName={pathname} />
          ) : (
            <>
              <Navbar />
              {pathname === '/pages/history' ? (
                <DatePicker smallAndTabScreen={mobile || tablet} />
              ) : null}
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Header;

import React from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';

import Drawer from './Drawer';
import { useStyles } from '../utils/muiStyles';
import Navbar from './Navbar';
import DatePicker from './DatePicker';

const Header = () => {
  const { pathname } = useLocation();
  const { brandLogo, logoContainer, soccerIcon } = useStyles();
  const mobile = useSelector(state => state.mediaQuery.mobile);
  const tablet = useSelector(state => state.mediaQuery.tablet);

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
              EchelonBetTips
            </Typography>
          </Box>
          {mobile || tablet ? (
            <Drawer pathName={pathname} smallAndTabScreen={mobile || tablet} />
          ) : (
            <>
              <Navbar smallAndTabScreen={mobile || tablet} />
              {pathname === '/pages/history' ? <DatePicker /> : null}
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Header;

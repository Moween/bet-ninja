import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import { useMediaQuery } from '@mui/material';
import { useLocation } from 'react-router';

import Drawer from './Drawer';
import { useStyles, theme as useTheme } from '../utils/muiStyles';
import Navbar from './Navbar';
import DatePicker from './DatePicker';

const Header = () => {
  const { pathname } = useLocation();
  const { brandLogo, logoContainer, soccerIcon } = useStyles();
  const theme = useTheme;
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const tablet = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box component="header" className="header">
      <Container maxWidth="false">
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

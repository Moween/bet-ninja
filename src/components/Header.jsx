import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import { useStyles } from '../utils/muiStyles';
import Navbar from './Navbar';
import DatePicker from './DatePicker';
import { useLocation } from 'react-router';

const Header = () => {
  const { pathname } = useLocation();
  const { brandLogo, logoContainer, soccerIcon } = useStyles();
  return (
    <Box component="header" className="header">
      <Container maxWidth="false">
        <Box className="header__div">
          <Box className={logoContainer}>
            <SportsSoccerIcon className={soccerIcon} fontSize="large" />
            <Typography
              className={brandLogo}
              variant="h2"
              component="h1"
              sx={{ fontFamily: "'Lobster', cursive" }}
            >
              Bet
              <Typography
                variant="h2"
                component="span"
                sx={{ color: '#612a11', fontFamily: "'Lobster', cursive"  }}
              >
                Ninja
              </Typography>
            </Typography>
          </Box>
          <Navbar />
          {pathname === '/pages/history' ? <DatePicker /> : null}
        </Box>
      </Container>
    </Box>
  );
};

export default Header;

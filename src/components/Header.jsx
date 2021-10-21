import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import { useStyles } from '../utils/muiStyles';

const Header = () => {
  const { brandLogo, logoContainer, soccerIcon } = useStyles();
  return (
    <header className="header">
      <Container maxWidth="lg">
        <div className="header__div">
          <div  className={logoContainer}>
            <SportsSoccerIcon className={soccerIcon} />
            <Typography 
              className={brandLogo} 
              variant="h4" component="h1" 
            >
              Bet
              <Typography 
                variant="h4" 
                component="span" 
                sx={{ color: '#e70008'}}
              >
                Ninja
              </Typography>
            </Typography>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

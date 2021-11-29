import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';
import { theme } from '../utils/muiStyles';
import Header from './Header';
import Home from '../pages/Main';
import History from '../pages/History';
import Footer from './Footer';
import '../css/App.css';
import { useMediaQuery } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setSmallScreen, setMediumScreen } from '../reducers/mediaQuery';

function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setSmallScreen(isMobile));
  }, [dispatch, isMobile]);
  useEffect(() => {
    dispatch(setMediumScreen(isTablet));
  }, [dispatch, isTablet]);

  return ( 
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route path='/pages/history' component={History} />
        <Route path='/' component={Home} />
      </Switch>
      <Footer />
    </ThemeProvider>
  )
}

export default App;

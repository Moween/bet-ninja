import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { theme } from '../utils/muiStyles';
import { useMediaQuery } from '@material-ui/core';

import Header from './Header';
import Home from '../pages/Home';
import History from '../pages/History';
import Footer from './Footer';
import '../css/App.css';
import { setSmallScreen, setMediumScreen } from '../reducers/mediaQuery';

function App() {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down(768));
  const isTablet = useMediaQuery(theme.breakpoints.between(768, 1024));

  dispatch(setMediumScreen(isTablet));
  dispatch(setSmallScreen(isMobile));

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route path="/pages/history" component={History} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';
import { theme } from '../utils/muiStyles';

import Header from './Header';
import Home from '../pages/Home';
import History from '../pages/History';
import Footer from './Footer';
import '../css/App.css';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route path="/pages/history" component={History} />
        <Route path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

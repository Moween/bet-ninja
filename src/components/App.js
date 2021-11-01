import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';
import { theme } from '../utils/muiStyles';
import Header from './Header';
import Home from '../pages/Main';
import History from '../pages/History';
import Footer from './Footer';
import '../css/App.css';

function App() {
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

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';
import { theme } from '../utils/muiStyles';
import Home from '../pages/Main';
import Header from './Header';
import History from '../pages/History';
import SideBar from '../components/SideBar'
import '../css/App.css';

function App() {
  return (    
    <ThemeProvider theme={theme}>
      <Header />
      <SideBar />
      <Switch>
        <Route path='/pages/history' component={History} />
        <Route path='/' component={Home} />
      </Switch>
    </ThemeProvider>
  )
}

export default App;

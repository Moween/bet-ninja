import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../utils/styles';
import Header from './Header';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  )
}

export default App;

import { createTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

export const theme = createTheme({
  breakpoints: { // Media Query Breakpoint
    values:{
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1024,
      xl: 1140,
    },
    unit: 'px'
  },
  palette: {
    secondary: {
      main: '#42b72a'
    }
  }
});

export const useStyles = makeStyles((theme) => ({
  // Header Styles
  brandLogo: {
    color: '#ccc',
    padding: 10,
    paddingLeft: 0
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  soccerIcon: {
    color: 'white'
  },
  // TableData Styles

}));




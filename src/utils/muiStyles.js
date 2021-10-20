import { createTheme, makeStyles } from '@material-ui/core/styles';

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
    color: 'white',
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
}));




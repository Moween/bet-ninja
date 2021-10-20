import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  breakpoints: {
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




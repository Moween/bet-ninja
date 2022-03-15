import { createTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#031626',
    },
    secondary: {
      main: '#42b72a',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#f1f1e6',
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          backgroundColor: '#f1f1e6',
          color: 'inherit',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: '#ccc',
          width: '9rem',
          height: '2.5rem',
          marginLeft: '0.5rem',
          padding: 0,
        },
        input: {
          height: '2rem',
          fontSize: '0.875rem',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#ccc',
          fontWeight: 'bold',
          lineHeight: 1,
          fontSize: '0.875rem',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          top: '-5%',
          left: '4%',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#ccc',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#ccc',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        backgroundColor: '#0099FA',
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        outlined: {
          color: '#ccc',
          borderColor: '#031626',
          backgroundColor: '#031626',
          fontWeight: 'bold',
          '&:hover': {
            color: '#031626',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          padding: '.1rem',
          borderRadius: 0,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 50,
        },
      },
    },
    MuiSelected: {
      styleOverrides: {
        root: {
          color: '#ccc',
        },
      },
    },
    MuiTabIndicator: {
      styleOverrides: {
        root: {
          color: '#ccc',
          backgroundColor: '#ccc',
        },
      },
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  // Header Styles
  brandLogo: {
    color: '#ccc',
    padding: 10,
    paddingLeft: 0,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  soccerIcon: {
    color: '#ccc',
  },
  // Text Styles
  text: {
    textAlign: 'center',
    marginTop: '0.5rem',
    padding: '2rem',
    color: '#ccc',
  },
}));

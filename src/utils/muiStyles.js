import React, { forwardRef } from 'react';
import { createTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

// Customize Mui Link Component
const LinkBehavior = forwardRef((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return <Link data-testid="custom-link" ref={ref} to={href} {...other} />;
});

export const theme = createTheme({
  breakpoints: {
    // Media Query Breakpoint
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 992,
      xl: 1140,
    },
    unit: 'px',
  },
  palette: {
    secondary: {
      main: '#42b72a',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
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
        }
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#ccc',
          fontWeight: 'bold',
          lineHeight: 1,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          top: '-15%',
        },
      }
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
          borderColor: '#5f6468',
          backgroundColor: '#031626',
          fontWeight: 'bold',
        },
      },
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  // Header Styles
  brandLogo: {
    [theme.breakpoints.down('md')]: {
    },
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
  // TableData Styles
  loadingText: {
    textAlign: 'center',
    marginTop: '0.5rem',
  },
  
}));

import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import { useMediaQuery } from '@material-ui/core';

import Navbar from './Navbar';
import DatePicker from './DatePicker';
import { theme } from '../utils/muiStyles';

const TemporaryDrawer = ({ pathName }) => {
  const [state, setState] = useState(false);
  const mobile = useMediaQuery(theme.breakpoints.down(768));
  const tablet = useMediaQuery(theme.breakpoints.between(768, 1024));

  const toggleDrawer = (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState((prevState) => !prevState);
  };

  return (
    <Box>
      <Button onClick={toggleDrawer}>{<MenuIcon />}</Button>
      <SwipeableDrawer
        variant="temporary"
        anchor="right"
        open={state}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        sx={{
          [`& .MuiDrawer-paper`]: {
            backgroundColor: mobile ? '#031626' : '#F1F1E6',
            color: '#ccc',
            boxSizing: 'border-box',
          },
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box sx={{ width: mobile ? 180 : 240 }} role="side-nav">
          <Divider />
          <Navbar />
          {pathName === '/pages/history' ? (
            <>
              <Divider />
              <DatePicker
                smallAndTabScreen={mobile || tablet}
                closeDrawer={() => setState(false)}
              />
            </>
          ) : null}
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default TemporaryDrawer;

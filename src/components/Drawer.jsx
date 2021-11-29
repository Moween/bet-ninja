import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';

import Navbar from './Navbar';
import DatePicker from './DatePicker';

const TemporaryDrawer = ({ pathName, smallAndTabScreen }) => {
  const [state, setState] = useState(false);

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
            backgroundColor: '#F1F1E6',
            boxSizing: 'border-box',
          },
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box sx={{ width: 240 }} role="side-nav">
          <Divider />
          <Navbar smallAndTabScreen={smallAndTabScreen} />
          {pathName === '/pages/history' ? (
            <>
              <Divider />
              <DatePicker smallAndTabScreen={smallAndTabScreen} />
            </>
          ) : null}
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default TemporaryDrawer;

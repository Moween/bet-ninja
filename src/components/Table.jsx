import React from 'react';
import Box from '@material-ui/core/Box';
import { useMediaQuery } from '@material-ui/core';

import { theme } from '../utils/muiStyles';

const Table = (props) => {
  const tablet = useMediaQuery(theme.breakpoints.between(768, 1024));
  return (
    <Box component="table">
      <thead>
        <tr>
          <th>Time</th>
          {!tablet ? <th>Country</th> : null}
          <th>League</th>
          <th>Match</th>
          <th>Odd</th>
          <th>Tip</th>
          <th>Score</th>
          {!tablet ? <th>Result</th> : null}
          <th>Outcome</th>
        </tr>
      </thead>
      {props.children}
    </Box>
  );
};

export default Table;

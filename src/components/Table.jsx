import React from 'react';
import Box from '@material-ui/core/Box';
import { useMediaQuery } from '@mui/material';
import { theme as useTheme } from '../utils/muiStyles';

const Table = (props) => {
    const theme = useTheme;
    const medium = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  return (
    <Box component="table">
      <thead>
        <tr>
          <th>Time</th>
          {!medium ? <th>Country</th> : null}
          <th>Match</th>
          <th>League</th>
          <th>Odd</th>
          <th>Tip</th>
          <th>Score</th>
          {!medium ? <th>Result</th> : null}
          <th>Outcome</th>
        </tr>
      </thead>
      {props.children}
    </Box>
  );
};

export default Table;

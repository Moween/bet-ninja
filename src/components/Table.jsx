import React from 'react';
import Box from '@material-ui/core/Box';

const Table = (props) => {
  return (
    <Box component="table">
      <thead>
        <tr>
          <th>Time</th>
          <th>Country</th>
          <th>Match</th>
          <th>League</th>
          <th>Odd</th>
          <th>Tip</th>
          <th>Score</th>
          <th>Result</th>
          <th>Outcome</th>
        </tr>
      </thead>
      {props.children}
    </Box>
  );
};

export default Table;

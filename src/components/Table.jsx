import React from 'react';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';

const Table = (props) => {
  const tablet = useSelector(state => state.mediaQuery.tablet);
  return (
    <Box component="table">
      <thead>
        <tr>
          <th>Time</th>
          {!tablet ? <th>Country</th> : null}
          <th>Match</th>
          <th>League</th>
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

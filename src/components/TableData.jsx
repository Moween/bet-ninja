import React from 'react';
import Box from '@material-ui/core/Box';
import { getTime } from '../utils';

const TableData = ({ match }) => {
  const { date, league, homeTeam, awayTeam, odd, tip, score } = match;
  return (
    <tr>
      <td className="time">
        <Box
          sx={{
            width: 'auto',
            height: 'auto',
            bgcolor: '#e70008',
            borderRadius: '0.125rem',
            marginTop: 'auto',
            color: '#ccc',
            padding: '0.31rem'
          }}
        >
          {getTime(date)}
        </Box>
      </td>
      <td>
        <div className="team">{homeTeam}</div>
        <div className="team">{awayTeam}</div>
      </td>
      <td>
        <span>{league}</span>
      </td>
      <td>
        <span>{odd}</span>
      </td>
      <td>
        <span>{tip}</span>
      </td>
      <td>
        <span>{score}</span>
      </td>
    </tr>
  );
};

export default TableData;

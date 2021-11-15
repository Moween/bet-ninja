import React from 'react';
import Flag from 'react-flags';
import Box from '@material-ui/core/Box';
import { getTime } from '../utils';

const TableData = ({ match }) => {
  const {
    date,
    countryCode,
    league,
    homeTeam,
    awayTeam,
    odd,
    tip,
    score,
    outcome,
  } = match;
  return (
    <tr>
      <td className="time">
        <Box
          sx={{
            width: 'auto',
            height: 'auto',
            bgcolor: '#612a11',
            borderRadius: '0.125rem',
            marginTop: 'auto',
            color: '#ccc',
            padding: '0.31rem',
          }}
        >
          {getTime(date)}
        </Box>
      </td>
      <td>
        <span>{countryCode}</span>
      </td>
      <td>
        <span className="team">{homeTeam}</span> vs{' '}
        <span className="team">{awayTeam}</span>
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
      <td>
        <span className={outcome === 'WON' ? "green" : "red"}>{outcome}</span>
      </td>
    </tr>
  );
};

export default TableData;

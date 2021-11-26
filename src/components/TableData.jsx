import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
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

  const showOutcomeIcon = () => {
    if (outcome === 'WON') {
      return <CheckIcon sx={{ color: '#0099FA' }} />;
    } else if (!outcome) {
      return null;
    }

    return <CloseIcon sx={{ color: '#E70008' }} />;
  };

  return (
    <>
      <tr>
        <td className="time">
          <Box
            sx={{
              width: 'auto',
              height: 'auto',
              bgcolor: '#031626',
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
          <span className="team">{homeTeam}</span>
          <span>vs</span>
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
          <span>{outcome && outcome.slice(0, 1) + outcome.slice(1).toLowerCase()}</span>
        </td>
        <td>
          <span>{showOutcomeIcon()}</span>
        </td>
      </tr>
    </>
  );
};

export default TableData;

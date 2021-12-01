import React from 'react';
import Box from '@material-ui/core/Box';
import showOutcomeIcon, { getTime } from '../utils';
import { useSelector } from 'react-redux';

const TableData = ({ match }) => {
    const tablet = useSelector((state) => state.mediaQuery.tablet);

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
        {!tablet ? (
          <td>
            <span>{countryCode}</span>
          </td>
        ) : null}
        <td className={ tablet ? 'md-sc' : null}>
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
        {!tablet ? (
          <td>
            <span>
              {outcome && outcome.slice(0, 1) + outcome.slice(1).toLowerCase()}
            </span>
          </td>
        ) : null}
        <td>
          <span>{showOutcomeIcon(outcome)}</span>
        </td>
      </tr>
    </>
  );
};

export default TableData;

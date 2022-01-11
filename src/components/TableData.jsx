import React from 'react';
import Box from '@material-ui/core/Box';
import { useMediaQuery } from '@material-ui/core';

import showOutcomeIcon, { getTime } from '../utils';
import { theme } from '../utils/muiStyles';

const TableData = ({ match }) => {
  const mobile = useMediaQuery(theme.breakpoints.down(768));
  const tablet = useMediaQuery(theme.breakpoints.between(768, 1024));

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
        <td>
          <span>{league}</span>
        </td>
        <td className={mobile || tablet ? 'md-sc' : 'lg-sc'}>
          <span className="team">{homeTeam}</span>
          {tablet ? null : <span>vs</span>}
          <span className="team">{awayTeam}</span>
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

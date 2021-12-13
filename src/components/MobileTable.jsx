import React from 'react';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@mui/material/Grid';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';

import showOutcomeIcon, { getTime } from '../utils';

const GridContainer = ({ match }) => {
  const {
    date,
    countryCode,
    homeTeam,
    awayTeam,
    league,
    odd,
    tip,
    score,
    outcome,
  } = match;
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          p: 0,
          m: 0,
          mb: '1rem',
          width: '100%',
          alignItems: 'center',
          color: '#ccc',
          fontSize: '0.875rem',
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box component="span">
            <SportsSoccerIcon fontSize="small" />
          </Box>
          <Box component="span">{league}</Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              width: '85%',
              height: 'auto',
              bgcolor: '#0099FA',
              borderRadius: '0.125rem',
              marginTop: 'auto',
              color: '#ccc',
              padding: '0.31rem',
              textAlign: 'center',
            }}
          >
            {getTime(date)}
          </Box>
        </Grid>
        <Grid
          item
          xs={7}
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box component="span" sx={{ mb: '0.5rem' }}>
            {homeTeam}
          </Box>
          <Box component="span">{awayTeam}</Box>
        </Grid>
        <Grid item xs={2} sx={{ pr: '1rem' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box component="span" sx={{ mb: '0.5rem', textAlign: 'center' }}>
              {score && score.split('-')[0]}
            </Box>
            <Box component="span" sx={{ textAlign: 'center' }}>
              {score && score.split('-')[1]}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box component="span">{countryCode}</Box>
        </Grid>
        <Grid item xs={5}>
          <Box component="span">{tip}</Box>
        </Grid>
        <Grid item xs={2}>
          <Box component="span">{odd}</Box>
        </Grid>
        <Grid item xs={2} sx={{ textAlign: 'center', pr: '1rem' }}>
          <Box component="span">{showOutcomeIcon(outcome)}</Box>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

const MobileTable = ({ soccerData, date }) => {
  return (
    <Box>
      <Box sx={{ mt: '1rem', color: '#ccc', textAlign: 'center' }}>{date}</Box>
      {soccerData &&
        soccerData.map((match, index) => <GridContainer key={index} match={match} />)
      }
    </Box>
  );
};

export default MobileTable;

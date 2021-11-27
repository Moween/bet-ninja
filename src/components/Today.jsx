import React from 'react';
import Box from '@material-ui/core/Box';
import TableBody from './TableBody';
import Table from './Table';
import { getDate } from '../utils/index';
import useFilterMatches from '../utils/useFilterMatches';

const Today = () => {
  let todayDate = getDate(new Date());
  const todayMatches = useFilterMatches(todayDate);

  return (
    <Box sx={{ overflowX: 'auto' }}>
      <Table>
        <TableBody soccerData={todayMatches} date={todayDate} />
      </Table>
    </Box>
  );
};

export default Today;

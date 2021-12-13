import React from 'react';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';

import TableBody from './TableBody';
import Table from './Table';
import { getDate } from '../utils/index';
import useFilterMatches from '../utils/useFilterMatches';
import MobileTable from './MobileTable';

const Today = () => {
  const mobile = useSelector((state) => state.mediaQuery.mobile);

  let todayDate = getDate(new Date());
  const todayMatches = useFilterMatches(todayDate);

  return (
    <Box sx={{ overflowX: 'auto' }}>
      {mobile ? (
        <MobileTable soccerData={todayMatches} date={todayDate} />
      ) : (
        <Table>
          <TableBody soccerData={todayMatches} date={todayDate} />
        </Table>
      )}
    </Box>
  );
};

export default Today;

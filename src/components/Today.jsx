import React from 'react';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';

import TableBody from './TableBody';
import Table from './Table';
import Text from './Text';
import { getDate } from '../utils/index';
import useFilterMatches from '../utils/useFilterMatches';
import MobileTable from './MobileTable';

const Today = () => {
  const mobile = useSelector((state) => state.mediaQuery.mobile);
  const tablet = useSelector((state) => state.mediaQuery.tablet);

  let todayDate = getDate(new Date());
  const todayMatches = useFilterMatches(todayDate);

  return (
    <Box sx={{ overflowX: 'auto' }}>
      {todayMatches ? (
        <Text content="loading" />
      ) : mobile || tablet ? (
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

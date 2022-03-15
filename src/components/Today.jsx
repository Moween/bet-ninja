import React from 'react';
import Box from '@material-ui/core/Box';
import { useMediaQuery } from '@material-ui/core';

import TableBody from './TableBody';
import Table from './Table';
import Text from './Text';
import useFilterMatches from '../utils/useFilterMatches';
import { getDate } from '../utils/index';
import { theme } from '../utils/muiStyles';
import MobileTable from './MobileTable';

const Today = () => {
  const mobile = useMediaQuery(theme.breakpoints.down(768));
  const tablet = useMediaQuery(theme.breakpoints.between(768, 1024));

  let todayDate = getDate(new Date());
  const todayMatches = useFilterMatches(todayDate);

  return (
    <Box sx={{ overflowX: 'auto' }}>
      {!todayMatches.length ? (
        <Text content="There are no games scheduled for today..." />
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

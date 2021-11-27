import React from 'react';
import Box from '@material-ui/core/Box';
import { subDays } from 'date-fns';

import TableBody from './TableBody';
import Table from './Table';
import useFilterMatches from '../utils/useFilterMatches';
import { getDate } from '../utils/index';

const Yesterday = () => {
  let yesterdayDate = getDate(subDays(new Date(), 1));
  const yesterdayMatches = useFilterMatches(yesterdayDate);

  return (
    <Box id="yesterday">
      <Table>
        <TableBody soccerData={yesterdayMatches} date={yesterdayDate} />
      </Table>
    </Box>
  );
};

export default Yesterday;

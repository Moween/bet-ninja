import React from 'react';
import addDays from 'date-fns/addDays';
import Box from '@material-ui/core/Box';

import TableBody from './TableBody';
import Table from './Table';
import useFilterMatches from '../utils/useFilterMatches';
import { getDate } from '../utils/index';

const Tomorrow = () => {
  let tomorrowDate = getDate(addDays(new Date(), 1));
  const tomorrowMatches = useFilterMatches(tomorrowDate);

  return (
    <Box id="tomorrow">
      <Table>
        <TableBody soccerData={tomorrowMatches} date={tomorrowDate} />
      </Table>
    </Box>
  );
};

export default Tomorrow;

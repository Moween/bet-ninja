import React from 'react';
import addDays from 'date-fns/addDays';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';

import TableBody from './TableBody';
import Table from './Table';
import useFilterMatches from '../utils/useFilterMatches';
import { getDate } from '../utils/index';
import MobileTable from './MobileTable';

const Tomorrow = () => {
  const mobile = useSelector((state) => state.mediaQuery.mobile);
  let tomorrowDate = getDate(addDays(new Date(), 1));
  const tomorrowMatches = useFilterMatches(tomorrowDate);

  return (
    <Box id="tomorrow">
      {mobile ? (
        <MobileTable soccerData={tomorrowMatches} date={tomorrowDate} />
      ) : (
        <Table>
          <TableBody soccerData={tomorrowMatches} date={tomorrowDate} />
        </Table>
      )}
    </Box>
  );
};

export default Tomorrow;

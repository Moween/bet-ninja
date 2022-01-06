import React from 'react';
import Box from '@material-ui/core/Box';
import { subDays } from 'date-fns';
import { useSelector } from 'react-redux';

import TableBody from './TableBody';
import Table from './Table';
import Text from './Text';
import useFilterMatches from '../utils/useFilterMatches';
import { getDate } from '../utils/index';
import MobileTable from './MobileTable';

const Yesterday = () => {
  const mobile = useSelector((state) => state.mediaQuery.mobile);
  const tablet = useSelector((state) => state.mediaQuery.tablet);

  let yesterdayDate = getDate(subDays(new Date(), 1));
  const yesterdayMatches = useFilterMatches(yesterdayDate);

  return (
    <Box id="yesterday">
      {yesterdayMatches ? (
        <Text content="No Games..." />
      ) : mobile || tablet ? (
        <MobileTable soccerData={yesterdayMatches} date={yesterdayDate} />
      ) : (
        <Table>
          <TableBody soccerData={yesterdayMatches} date={yesterdayDate} />
        </Table>
      )}
    </Box>
  );
};

export default Yesterday;

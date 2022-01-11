import React from 'react';
import Box from '@material-ui/core/Box';
import { subDays } from 'date-fns';
import { useMediaQuery } from '@material-ui/core';

import TableBody from './TableBody';
import Table from './Table';
import Text from './Text';
import useFilterMatches from '../utils/useFilterMatches';
import MobileTable from './MobileTable';
import { getDate } from '../utils/index';
import { theme } from '../utils/muiStyles';

const Yesterday = () => {
  const mobile = useMediaQuery(theme.breakpoints.down(768));
  const tablet = useMediaQuery(theme.breakpoints.between(768, 1024));

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

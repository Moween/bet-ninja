import React from 'react';
import addDays from 'date-fns/addDays';
import Box from '@material-ui/core/Box';
import { useMediaQuery } from '@material-ui/core';

import TableBody from './TableBody';
import Table from './Table';
import Text from './Text';
import useFilterMatches from '../utils/useFilterMatches';
import { getDate } from '../utils/index';
import { theme } from '../utils/muiStyles';

import MobileTable from './MobileTable';

const Tomorrow = () => {
  const mobile = useMediaQuery(theme.breakpoints.down(768));
  const tablet = useMediaQuery(theme.breakpoints.between(768, 1024));

  let tomorrowDate = getDate(addDays(new Date(), 1));
  const tomorrowMatches = useFilterMatches(tomorrowDate);

  return (
    <Box id="tomorrow">
      {tomorrowMatches ? (
        <Text content="No Games..." />
      ) : mobile || tablet ? (
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

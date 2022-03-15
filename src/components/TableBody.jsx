import React from 'react';
import TableData from './TableData';
import { useMediaQuery } from '@material-ui/core';

import { theme } from '../utils/muiStyles';

const TableBody = ({ soccerData, date }) => {
  const tablet = useMediaQuery(theme.breakpoints.between(768, 1024));

  return (
    <>
      <colgroup>
        <col span={tablet ? '2' : '9'}></col>
      </colgroup>
      <tbody>
        <tr className="date">
          <th scope="row" colSpan={tablet ? '2' : '9'}>
            {date}
          </th>
        </tr>
        {soccerData.map((match) => (
          <TableData
            key={match.fid}
            match={match}
            rowspan={soccerData.length}
          />
        ))}
      </tbody>
    </>
  );
};

export default TableBody;

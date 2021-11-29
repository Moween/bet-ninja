import React from 'react';
import TableData from './TableData';
import { useMediaQuery } from '@mui/material';
import { theme as useTheme } from '../utils/muiStyles';

const TableBody = ({ soccerData, date }) => {
   const theme = useTheme;
   const medium = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  return (
    <>
      <colgroup>
        <col span={medium ? "0" : "9"}></col>
      </colgroup>
      <tbody>
        <tr className="date">
          <th scope="row" colSpan={medium ? "0" : "9"}>{date}</th>
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

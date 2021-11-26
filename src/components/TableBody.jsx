import React from 'react';
import TableData from './TableData';

const TableBody = ({ soccerData, date }) => {
  return (
    <>
      <colgroup>
        <col span="9"></col>
      </colgroup>
      <tbody>
        <tr className="date">
          <th scope="row" colSpan="9">{date}</th>
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

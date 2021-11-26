import React from 'react';
import TableData from './TableData';

const TableContent = ({ soccerData, date }) => {
  return (
    <>
      <tbody>
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

export default TableContent;

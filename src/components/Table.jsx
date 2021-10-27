import React from "react";
import TableData from "./TableData";

const Table = ({ soccerData, date }) => {
  return (
    <table>
      <colgroup>
        <col span="2" />
      </colgroup>
      <thead>
        <tr>
          <th colSpan="2">{date}</th>
          <th>League</th>
          <th>Odd</th>
          <th>Tip</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {soccerData.map(match => <TableData key={match.fid} match={match} />)}
      </tbody>
    </table>
  );
};

export default Table;

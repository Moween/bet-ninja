import React from "react";
import { useSelector } from 'react-redux';
import TableData from "./TableData";

const Table = () => {
  const soccerData = useSelector(state => state.soccerData.soccerData);
  return (
    <table>
      <thead>
        <tr>
          <th>League</th>
          <th>Home Team</th>
          <th></th>
          <th>Away Team</th>
          <th>OverUnderOdd</th>
          <th>Tip</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {soccerData.map(match => <TableData match={match} />)}
      </tbody>
    </table>
  );
};

export default Table;

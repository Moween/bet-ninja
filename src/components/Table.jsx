import React from "react";
import { useSelector } from 'react-redux';
import TableData from "./TableData";

const Table = () => {
  const soccerData = useSelector(state => state.soccerData.soccerData);
  return (
    <table>
      <colgroup>
        <col span="2" />
      </colgroup>
      <thead>
        <tr>
          <th colSpan="2"></th>
          <th>League</th>
          <th>Odd</th>
          <th>Tip</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {soccerData.map(game => <TableData key={game.fid} game={game} />)}
      </tbody>
    </table>
  );
};

export default Table;

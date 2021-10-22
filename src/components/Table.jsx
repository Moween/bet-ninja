import React from "react";
import { useSelector } from 'react-redux';
import TableData from "./TableData";
import { useStyles } from "../utils/muiStyles";

const Table = () => {
  const soccerData = useSelector(state => state.soccerData.soccerData);
  const { table } = useStyles();
  return (
    <table className={table}>
      <thead>
        <tr>
          <th>League</th>
          <th>HomeTeam</th>
          <th></th>
          <th>AwayTeam</th>
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

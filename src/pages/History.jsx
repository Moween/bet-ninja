import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { useStyles } from '../utils/muiStyles';
import fetchHistory from '../actions/history';
import Table from '../components/Table';
import TableBody from '../components/TableBody';
import { getDate, getPastDates } from '../utils/index';
import Pagination from '../components/Pagination';

const History = () => {
  const { loadingText } = useStyles();
  const [page, setPage] = useState(1);
  const tablePerPage = 3;
  const soccerData = useSelector((state) => state.pastMatchesData.soccerData);
  const soccerDataStatus = useSelector((state) => state.pastMatchesData.status);
  const dispatch = useDispatch();
  
  const handleChange = (event, value) => {
    setPage(value);
  };
  
  useEffect(() => {
    if (soccerDataStatus === 'idle') {
      const startDate = getPastDates(30);
      // Get yesterday date in the format YYYY-MM-DD
      const endDate = getPastDates(1);
      dispatch(fetchHistory({ startDate, endDate })); // Dispatch action to fetchPastData
    }
    // eslint-disable-next-line
  }, []);

  // Group the history result by date
  const groupMatchesByDate = (soccerData, key) => {
    return soccerData.reduce((prevValue, currentMatch) => {
      if (!prevValue[getDate(currentMatch[key])]) {
        prevValue[getDate(currentMatch[key])] = [];
      }

      prevValue[getDate(currentMatch[key])].push(currentMatch);
      return prevValue;
    }, {});
  };

  const renderContent = () => {
    if (soccerDataStatus === 'loading') {
      return (
        <Typography variant="body1" component="p" className={loadingText}>
          Loading...
        </Typography>
      );
    } else if (soccerDataStatus === 'succeeded') {
      const tableBody = Object.entries(groupMatchesByDate(soccerData, 'date'))
        .slice((page - 1) * tablePerPage, page * tablePerPage)
        .map(([key, soccerData], index) => {
          return <TableBody key={key} soccerData={soccerData} date={key} />;
        });
      return (
        <>
          <Table>{tableBody}</Table>
          <Pagination
            items={Object.entries(groupMatchesByDate(soccerData, 'date'))}
            page={page}
            tablePerPage={tablePerPage}
            handleChange={handleChange}
          />
        </>
      );
    }
  };
  return (
    <Box component="main">
      <ToastContainer autoClose={false} />
      <Box sx={{ marginTop: '3rem' }}>{renderContent()}</Box>
    </Box>
  );
};

export default History;

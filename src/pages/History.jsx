import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import fetchHistory from '../actions/history';
import Table from '../components/Table';
import { getDate } from '../utils/index';
import { useStyles } from '../utils/muiStyles';
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
      dispatch(fetchHistory()); // Dispatch action to fetchPastData
    }
  }, [soccerDataStatus, dispatch]);

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
        <Typography variant="body1" component="p" classes={loadingText}>
          Loading...
        </Typography>
      );
    } else if (soccerDataStatus === 'succeeded') {
      const tables = Object.entries(groupMatchesByDate(soccerData, 'date'))
        .slice((page - 1) * tablePerPage, page * tablePerPage)
        .map(([key, soccerData]) => {
          return <Table key={key} soccerData={soccerData} date={key} />;
        });
      return (
        <>
          {tables}
          <Pagination
            items={Object.entries(groupMatchesByDate(soccerData, 'date'))}
            page={page}
            tablePerPage={tablePerPage}
            handleChange={handleChange}
          />
        </>
      )
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

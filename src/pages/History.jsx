import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import fetchHistory from '../actions/history';
import { fetchDataStored } from '../reducers/historySlice';
import Table from '../components/Table';
import { getDate } from '../utils/index';
import { useStyles } from '../utils/muiStyles'

const History = () => {
  const { loadingText } = useStyles();
  const soccerData = useSelector((state) => state.pastMatchesData.soccerData);
  const soccerDataStatus = useSelector((state) => state.pastMatchesData.status);
  const dispatch = useDispatch();

  const getDataFromStorage = () => {
    let soccerData = sessionStorage.getItem('pastMatches'); // Get data from local Storage
    if (soccerData) {
      return (soccerData = JSON.parse(soccerData)); // Parse data
    } else {
      sessionStorage.setItem('pastMatches', []);
    }
  };

  useEffect(() => {
    const soccerData = getDataFromStorage();
    if (soccerData) {
      // Dispatch action to save data gotten from sessionStorage
      dispatch(fetchDataStored(soccerData));
    } else {
      if (soccerDataStatus === 'idle') {
        dispatch(fetchHistory()); // Dispatch action to fetchPastData
      }
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
      // Save data to sessionStorage
      sessionStorage.setItem('pastMatches', JSON.stringify(soccerData));

      return Object.entries(groupMatchesByDate(soccerData, 'date')).map(
        ([key, soccerData]) => {
          return <Table key={key} soccerData={soccerData} date={key} />;
        }
      );
    }
  };
  return (
    <Box component="main">
      <ToastContainer />
      <Box style={{ marginTop: '3rem' }}>{renderContent()}</Box>
    </Box>
  );
};

export default History;

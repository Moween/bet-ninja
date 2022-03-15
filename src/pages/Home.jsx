import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getPastDates } from '../utils/index';
import fetchHistory from '../actions/history';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { ToastContainer } from 'react-toastify'; // To display network errors
import fetchSoccerData from '../actions/soccerData';
import Tabs from '../components/Tabs';
import Text from '../components/Text';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const dispatch = useDispatch();
  const soccerDataStatus = useSelector((state) => state.soccerData.status);
  const historyStatus = useSelector(
    (state) => state.pastMatchesData.status
  );

  useEffect(() => {
    if (soccerDataStatus === 'idle') {
      dispatch(fetchSoccerData()); // Http Request to fetchData
    }
    // eslint-disable-next-line
  }, []);

   useEffect(() => {
    if (historyStatus === 'idle') {
      const startDate = getPastDates(30);
      // Get yesterday date in the format YYYY-MM-DD
      const endDate = getPastDates(1);
      dispatch(fetchHistory({ startDate, endDate })); // Dispatch action to fetchPastData
    }
    // eslint-disable-next-line
  }, []);

  const renderContent = () => {
    if (soccerDataStatus === 'loading') {
      return <Text content="Loading..." />;
    } else if (soccerDataStatus === 'succeeded') {
      return (
        <Box>
          <Tabs />
        </Box>
      );
    }
  };

  

  return (
    <Box component="main">
      <Container maxWidth="xl">
        {renderContent()}
        <ToastContainer autoClose={false} />
      </Container>
    </Box>
  );
};

export default Home;

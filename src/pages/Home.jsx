import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { ToastContainer } from 'react-toastify'; // To display network errors
import 'react-toastify/dist/ReactToastify.css';
import fetchSoccerData from '../actions/soccerData';
import Tabs from '../components/Tabs';

const Home = () => {
  const dispatch = useDispatch();
  const soccerDataStatus = useSelector((state) => state.soccerData.status);

  useEffect(() => {
    if (soccerDataStatus === 'idle') {
      dispatch(fetchSoccerData()); // Http Request to fetchData
    }
  }, [soccerDataStatus, dispatch]);

  const renderContent = () => {
    if (soccerDataStatus === 'loading') {
      return <Typography component="p" className="loadingText">Loading...</Typography>;
    } else if (soccerDataStatus === 'succeeded') {
      return <Tabs />;
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
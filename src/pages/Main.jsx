import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { ToastContainer } from 'react-toastify'; // To display network errors
import { Route, Switch } from 'react-router-dom';
import fetchSoccerData from '../actions/soccerData';
import { useStyles } from '../utils/muiStyles';
import Today from '../components/Today';
import Yesterday from '../components/Yesterday';
import Tomorrow from '../components/Tomorrow';
import Tabs from '../components/Tabs';

const Home = () => {
  const { container } = useStyles();
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
      return (
        <Box>
          <Switch>
            <Route path="/yesterday" component={Yesterday} />
            <Route path="/tomorrow" component={Tomorrow} />
            <Route path="/" component={Today} />
          </Switch>
        </Box>
      );
    }
  };
  return (
    <Box component="main">
      <Container maxWidth="xl" className={container}>
        <Tabs />
        {renderContent()}
        <ToastContainer />
      </Container>
    </Box>
  );
};

export default Home;

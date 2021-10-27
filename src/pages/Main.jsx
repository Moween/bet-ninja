import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
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
      return <p className="loadingText">Loading...</p>;
    } else if (soccerDataStatus === 'succeeded') {
      return (
        <div>
          <Switch>
            <Route path="/yesterday" component={Yesterday} />
            <Route path="/tomorrow" component={Tomorrow} />
            <Route path="/" component={Today} />
          </Switch>
        </div>
      );
    }
  };
  return (
    <main>
      <ToastContainer />
      <Container maxWidth="xl" className={container}>
        <Tabs />
        {renderContent()}
      </Container>
    </main>
  );
};

export default Home;

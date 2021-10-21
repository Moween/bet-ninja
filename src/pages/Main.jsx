import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import { ToastContainer } from 'react-toastify'; // To display network errors
import fetchSoccerData from '../features/actions/soccerData';
import { useStyles } from '../utils/muiStyles';
import Table from '../components/Table';

const Home = () => {
  const { container } = useStyles();
  const dispatch = useDispatch();
  const soccerData = useSelector(state => state.soccerData.soccerData);
  const soccerDataStatus  = useSelector(state => state.soccerData.status);

  useEffect(() => {
  if(soccerDataStatus === 'idle') {
    dispatch(fetchSoccerData()); // Http Request to fetchData
  }
  }, [soccerDataStatus, dispatch]);

  const renderContent = () => {
    if(soccerDataStatus === 'loading') {
      return <p style={{ marginTop: 10 }}>Loading...</p>
    }else if(soccerDataStatus === 'succeeded') {
      return (
        <div>
          {/* <Table soccerData={soccerData} /> */}
        </div>
      );
    }
  }
  return ( 
    <main>  
      <ToastContainer />
      <Container maxWidth="lg" className={container}>
        {renderContent()}
      </Container>  
    </main>
  );
}
 
export default Home;
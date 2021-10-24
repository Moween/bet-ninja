import React from 'react';
import Box from "@material-ui/core/Box";
import Table from './Table';
import DatePicker from './DatePicker';


const Today = () => {
  return ( 
    <Box sx={{ overflowX: 'auto'}}>
      <DatePicker />
      <Table />
    </Box>
  );
}
 
export default Today;
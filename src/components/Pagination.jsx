import React from 'react';
import Pagination from '@mui/material/Pagination';

const PaginateData = ({ items, tablePerPage, page, handleChange }) => {
  return (
    <Pagination
      count={Math.ceil(items.length / tablePerPage)}
      sx={{
        mt: '2rem',
        [`& .MuiPagination-ul`]: {
         justifyContent: 'center'
        },
        [`& .Mui-selected`]: {
          backgroundColor: '#ccc'
        }
      }}
      page={page}
      variant="outlined"
      shape="rounded"
      onChange={handleChange}
    />
  );
};

export default PaginateData;

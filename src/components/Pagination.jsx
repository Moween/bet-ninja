import React from 'react';
import Pagination from '@mui/material/Pagination';

const PaginateData = ({ items, tablePerPage, page, handleChange }) => {
  return (
    <Pagination
      count={Math.ceil(items.length / tablePerPage)}
      sx={{
        mt: '2rem',
        [`& .MuiPagination-ul`]: {
         justifyContent: 'center',
         [`& .MuiPaginationItem-root.Mui-selected`]: {
           backgroundColor: '#ccc',
           color: '#031626'
         }
        },
      }}
      page={page}
      variant="outlined"
      shape="rounded"
      onChange={handleChange}
    />
  );
};

export default PaginateData;

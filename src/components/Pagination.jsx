import React from 'react';
import Pagination from '@mui/material/Pagination';

const PaginateData = ({ items, tablePerPage, page, handleChange }) => {
  const count = Math.ceil(items.length / tablePerPage);
  return (
    <Pagination 
      count={count}
      sx={{
        mt: '2rem',
        [`& .MuiPagination-ul`]: {
          justifyContent: 'center',
          [`& .MuiPaginationItem-root.Mui-selected`]: {
            backgroundColor: '#fff',
            color: '#031626',
          },
        },
        visibility: `${count === 1  ? 'hidden' : 'visible'}`
      }}
      page={page}
      variant="outlined"
      shape="rounded"
      onChange={handleChange}
      hidePrevButton={page === 1 ? true : false}
      hideNextButton={page === count ? true : false}
    />
  );
};

export default PaginateData;

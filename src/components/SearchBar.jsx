import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className="searchBox" onSubmit={handleSubmit}>
      <input
        className="searchInput"
        type="text"
        value={searchTerm}
        name="search"
        placeholder="Search"
        onChange={handleChange}
      />
      <button type="submit" className="searchButton">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;

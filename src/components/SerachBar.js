import React from "react";

const SearchBar = ({ searchQuery, onSearch }) => (
  <input
    type="text"
    placeholder="Search..."
    value={searchQuery}
    onChange={(e) => onSearch(e.target.value)}
    className="search-bar"
  />
);

export default SearchBar;

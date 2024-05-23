import React from "react";
import "./SerachBar.css";
const SearchBar = ({ searchQuery, onSearch }) => (
  <input
    type="text"
    placeholder="Search here ."
    value={searchQuery}
    onChange={(e) => onSearch(e.target.value)}
    className="search-bar"
  />
);

export default SearchBar;

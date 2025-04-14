import React from "react";

function SearchBar(props) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search expenses..."
      value={props.searchTerm}
      onChange={function (event) {
        props.onSearch(event.target.value);
      }}
    />
  );
}

export default SearchBar;
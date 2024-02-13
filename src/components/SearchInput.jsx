import React from "react";

function SearchInput({ search, getShearch, updateSearch }) {
  return (
    <div>
      <form onSubmit={getShearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchInput;

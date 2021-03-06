import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, onChange }) => (
  <>
    <h1>News Search</h1>
    <input
      placeholder="search here"
      value={search}
      onChange={onChange}>
    </input>
  </>
);

Search.propTypes = {
  search: PropTypes.string,
  onChange: PropTypes.func
};

export default Search;

import React from 'react';

const SearchForm = ({ handleChange, value }) => (
  <form onChange={handleChange}>
    <input type="text" value={value} />
  </form>
);

export default SearchForm;

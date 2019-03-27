import React from 'react';

const SearchForm = ({ handleChange, value }) => (
  <form>
    <input type="text" value={value} onChange={handleChange} />
  </form>
);

export default SearchForm;

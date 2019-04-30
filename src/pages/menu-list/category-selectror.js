import React from 'react';

const styles = {
  select: {
    fontSize: 15
  }
};

const CategorySelectror = ({ categories = [], value, onChange }) => (
  <div>
    <select
      style={styles.select}
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      {categories.map(({ id, name }) => (
        <option key={id} value={name}>
          {name}
        </option>
      ))}
    </select>
  </div>
);

export default CategorySelectror;

import React from 'react';

import styles from './category-selector.module.css';

const CategorySelectror = ({ categories = [], value, onChange }) => (
  <div className={styles.container}>
    <select
      className={styles.select}
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

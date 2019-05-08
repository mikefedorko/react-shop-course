/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import classes from './Label.module.css';

const Label = ({ text, children }) => (
  <label className={classes.label}>
    <span className={classes.text}>{text}</span>
    {children}
  </label>
);

export default Label;

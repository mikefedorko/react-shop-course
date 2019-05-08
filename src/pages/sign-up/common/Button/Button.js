import React from 'react';
import classes from './Button.module.css';

const Button = ({ label = '', onClick = () => null }) => (
  <button type="submit" onClick={onClick} className={classes.button}>
    {label}
  </button>
);

export default Button;

import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ srcLink, alt, width = 60, height = 60 }) => (
  <Link to="/">
    <img src={srcLink} alt={alt} width={width} height={height} />
  </Link>
);

export default Logo;

import React from 'react';

const Logo = ({ srcLink, alt, width = 60, height = 60 }) => (
  <img src={srcLink} alt={alt} width={width} height={height} />
);

export default Logo;

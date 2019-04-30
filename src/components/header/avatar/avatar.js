import React from 'react';
import s from './avatar.module.css';

const Avatar = ({ srcLink, width = 60, height = 60 }) => (
  <img
    className={s.avatar}
    src={srcLink}
    alt="avatar logo"
    width={width}
    height={height}
  />
);

export default Avatar;

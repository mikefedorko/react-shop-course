import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './avatar.module.css';

library.add(faUserCircle);

const Avatar = () => (
  <FontAwesomeIcon icon="user-circle" className={styles.avatar} />
);

export default Avatar;

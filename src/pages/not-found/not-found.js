import React from 'react';
import { Animated } from 'react-animated-css';

// Font-Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';

import styles from './not-found.module.css';

library.add(faSadTear);

const NotFoundPage = () => (
  <div className={styles.container}>
    <Animated animationIn="swing">
      <h2>
        404 Not Found <FontAwesomeIcon icon="sad-tear" />
      </h2>
    </Animated>
  </div>
);

export default NotFoundPage;

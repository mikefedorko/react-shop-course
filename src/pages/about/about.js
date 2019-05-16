import React from 'react';
import Gallery from 'react-photo-gallery';
import { Animated } from 'react-animated-css';

import styles from './about.module.css';

import photos from './photos';
import chef from '../../components/header/assets/restaurant.png';

const AboutPage = () => (
  <div className={styles.container}>
    <div className={styles.headline}>
      <h2>About</h2>
    </div>
    <Animated animationIn="fadeInRight" animationOut="fadeOut">
      <div className={styles.gallery}>
        <Gallery photos={photos} />
      </div>
    </Animated>
    <div className={styles.wishes}>
      <section>
        We are happy to see you in Trattoria! We cook for you to deliver you the
        most rich flavor of fresh products and the best spices. Our restaurant
        offers you classical dishes of European cuisine and also fusion ones. We
        love to experiment, so you can find several dishes of molecular
        gastronomy! Bon Appetit!
      </section>
    </div>
    <div className={styles.chef}>
      <img src={chef} alt="Omar Elnagar" />
      <span>Omar Elnagar — Chef</span>
    </div>
  </div>
);

export default AboutPage;

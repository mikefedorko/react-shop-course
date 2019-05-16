import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Animated } from 'react-animated-css';

import { BlurCutlery, Barbeque, ChainGlass, Coffee } from './assets';

import styles from './main.module.css';

const MainPage = () => (
  <Carousel fade>
    <Carousel.Item>
      <img className="d-block w-100" src={Barbeque} alt="Barbeque" />
      <Carousel.Caption>
        <Animated
          animationIn="fadeInUp"
          animationOut="fadeInDown"
          className={styles.caption}
        >
          <h3>Top Europian restaurant</h3>
          <p>Book online or call</p>
        </Animated>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={BlurCutlery} alt="BlurCutlery" />
      <Carousel.Caption>
        <Animated
          animationIn="fadeInUp"
          animationOut="fadeInDown"
          className={styles.caption}
        >
          <h3>Exquisite dishes from shef</h3>
          <p>Book online or call</p>
        </Animated>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={ChainGlass} alt="ChainGlass" />
      <Carousel.Caption>
        <Animated
          animationIn="fadeInUp"
          animationOut="fadeInDown"
          className={styles.caption}
        >
          <h3>Delicious. Fancy. Europian.</h3>
          <p>Book online or call </p>
        </Animated>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={Coffee} alt="Coffee" />
      <Carousel.Caption>
        <Animated
          animationIn="fadeInUp"
          animationOut="fadeInDown"
          className={styles.caption}
        >
          <h3>The best coffee in the whole city</h3>
          <p>Book online or call </p>
        </Animated>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default MainPage;

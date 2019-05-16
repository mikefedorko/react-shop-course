import React, { PureComponent, createRef } from 'react';
import { Button, ListGroup, Card } from 'react-bootstrap';

import { Animated } from 'react-animated-css';

import styles from './modal-window.module.css';

export default class ModaWindow extends PureComponent {
  containerRef = createRef();

  componentDidMount() {
    document.addEventListener('click', this.handleWindowClick);
    window.addEventListener('keydown', this.handleWindowKeyPress);
  }

  handleWindowClick = e => {
    if (e.target !== this.containerRef.current) return;
    const { onClick } = this.props;
    onClick();
    document.removeEventListener('click', this.handleWindowClick);
  };

  handleWindowKeyPress = e => {
    if (e.keyCode === 27) {
      const { onClick } = this.props;
      onClick();
      window.removeEventListener('keydown', this.handleWindowKeyPress);
    }
  };

  render() {
    const {
      infoAboutQuery: { id, date, price, address, rating },
      onClick
    } = this.props;
    return (
      <div className={styles.backDrop} ref={this.containerRef}>
        <Animated animationIn="fadeInDown">
          <div className={styles.modalWindow}>
            <Card style={{ width: '18rem' }}>
              <Card.Header>№ {id}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Date: {date}</ListGroup.Item>
                <ListGroup.Item>Price: {price}</ListGroup.Item>
                <ListGroup.Item>Adress: {address}</ListGroup.Item>
                <ListGroup.Item>Rating: {rating}</ListGroup.Item>
              </ListGroup>
            </Card>
            ;
            <br />
            <br />
            <Button
              type="button"
              variant="light"
              onClick={onClick}
              className={styles.button}
            >
              Close
            </Button>
          </div>
        </Animated>
      </div>
    );
  }
}

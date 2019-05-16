import React from 'react';
import { connect } from 'react-redux';
import { Card, CardGroup, ListGroup } from 'react-bootstrap';
import { Animated } from 'react-animated-css';

// Font-Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';

import { Selectors } from '../../components/redux/menu';

import styles from './account.module.css';

library.add(faCcMastercard);

const AccountPage = ({ user: { name, email } }) => (
  <div className={styles.container}>
    <div className={styles.headline}>
      <span>Welcome to account </span>
    </div>
    <Animated animationIn="fadeIn" animationOut="fadeOut">
      <div className={styles.info}>
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>ACCOUNT</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Card.Title>Name:</Card.Title>
                  <Card.Text className={styles.cardText}>{name}</Card.Text>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Card.Title>Email:</Card.Title>
                  <Card.Text className={styles.cardText}>{email}</Card.Text>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Card.Title>Phone number:</Card.Title>
                  <Card.Text>+095</Card.Text>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card className={styles.card}>
            <Card.Body>
              <Card.Title>ADRESS BOOK</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Card.Title>Home Adress:</Card.Title>
                  <ListGroup.Item className={styles.cardText}>
                    29 Battin Lane, Little Hampton, United Kingdom
                  </ListGroup.Item>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>CARD DETAILS</Card.Title>
              <ListGroup>
                <Card.Title>Payment Card:</Card.Title>
                <ListGroup.Item className={styles.cardText}>
                  <Card.Text>
                    <FontAwesomeIcon
                      icon={['fab', 'cc-mastercard']}
                      style={{ fontSize: '25px', marginRight: '15px' }}
                    />
                    **** **** **** 0092
                  </Card.Text>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </Animated>
  </div>
);

const mapStateToProps = state => ({
  user: Selectors.getUser(state)
});

export default connect(mapStateToProps)(AccountPage);

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Font-Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPhoneVolume,
  faUserFriends
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import styles from './contact-panel.module.css';

library.add(faPhoneVolume, faUserFriends, faInstagram);

const ContactPanel = () => (
  <div className={styles.container}>
    <Container>
      <Row className={styles.row}>
        <Col>
          <FontAwesomeIcon icon="phone-volume" className={styles.icon} />
          <span>Give us a call </span>
          <br />
          <span>357-22-14</span>
        </Col>
        <Col>
          <FontAwesomeIcon icon="user-friends" className={styles.icon} />
          <span>Need help?</span>
          <br />
          <span>Customer Service</span>
        </Col>
        <Col>
          <FontAwesomeIcon
            icon={['fab', 'instagram']}
            className={styles.icon}
          />
          <span>Our instagram</span>
          <br />
          <span>@trattorio</span>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ContactPanel;

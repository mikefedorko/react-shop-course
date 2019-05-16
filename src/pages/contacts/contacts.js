import React from 'react';
import { Animated } from 'react-animated-css';

import styles from './contacts.module.css';

const ContactsPage = () => (
  <div className={styles.container}>
    <div className={styles.headline}>
      <h2>Contacts</h2>
    </div>
    <Animated animationIn="fadeIn">
      <div className={styles.contacts}>
        <span>228 PARK AVE S, NEW YORK, NY 10003-1502, US</span>
        <span>TEL: 357-22-14</span>
        <span>
          E-MAIL: <em style={{ color: '#ffdd40' }}>INFO@DEMOLINK.ORG</em>
        </span>
      </div>
    </Animated>
  </div>
);

export default ContactsPage;

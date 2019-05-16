import React from 'react';
import Logo from '../../logo';
import logo from '../../header/assets/logo.png';

import styles from './footer-container.module.css';

import { ExternalLinksConfig } from '../../../configs/main-nav';

const FooterContainer = () => (
  <footer className={styles.footer}>
    <div className={styles.logo}>
      <Logo srcLink={logo} alt="Trattorio" />
    </div>
    <div className={styles.container}>
      <div className={styles.copyright}>
        <span>Developed And Styled By Mike Fedorko © 2019</span>
      </div>
      <div className={styles.social}>
        <ul>
          {ExternalLinksConfig.map(item => (
            <li key={item.key}>
              <a href={item.path} className={styles.link} target="blank">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default FooterContainer;

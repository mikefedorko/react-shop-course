import React from 'react';

// Font-Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserCircle,
  faMale,
  faMobileAlt,
  faEnvelopeSquare
} from '@fortawesome/free-solid-svg-icons';

import s from './account.module.css';

library.add(faUserCircle, faMale, faMobileAlt, faEnvelopeSquare);

const AccountPage = () => (
  <div className={s.Container}>
    <div className={s.info}>
      <ul style={{ listStyleType: 'none' }}>
        <li>
          <FontAwesomeIcon
            icon="male"
            style={{
              fontSize: '35px',
              marginLeft: '25px',
              paddingBottom: '15px'
            }}
          />
        </li>
        <li>
          <FontAwesomeIcon
            icon="user-circle"
            style={{ fontSize: '25px', paddingRight: '5px' }}
          />
          Bob Ross
        </li>
        <li>
          <FontAwesomeIcon
            icon="mobile-alt"
            style={{ fontSize: '25px', paddingRight: '5px' }}
          />
          832-21-21
        </li>
        <li>
          <FontAwesomeIcon
            icon="envelope-square"
            style={{ fontSize: '25px', paddingRight: '5px' }}
          />
          bra@gmail.com
        </li>
      </ul>
    </div>
    <div className={s.update}>
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, dolor
        delectus? Corporis esse, doloremque neque cum corrupti facere ut, ea
        vitae id quae dignissimos. Libero omnis ea alias eius facere. Quae eum,
        quaerat possimus id distinctio totam eveniet enim error veritatis
        similique, ullam aliquid numquam dolor laudantium rem doloribus magni.
        Fugit autem et repudiandae. Ipsam voluptates tempore deserunt cupiditate
        official!
      </span>
      <br />
      <button type="button">Update</button>
    </div>
  </div>
);

export default AccountPage;

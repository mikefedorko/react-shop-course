import React from 'react';

// Font-Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGoogle,
  faTwitter,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';

import routes from './routes';

library.add(faGoogle, faTwitter, faFacebook);

const MenuConfig = [
  {
    name: 'Home',
    path: routes.MAIN
  },
  {
    name: 'Menu',
    path: routes.MENU
  },
  {
    name: 'About',
    path: routes.ABOUT
  },
  {
    name: 'Contacts',
    path: routes.CONTACT
  }
];

const ExternalLinksConfig = [
  {
    name: <FontAwesomeIcon icon={['fab', 'google']} />,
    path: 'https://www.google.com/',
    key: 'Google'
  },
  {
    name: <FontAwesomeIcon icon={['fab', 'twitter']} />,
    path: 'https://www.twitter.com/',
    key: 'Twitter'
  },
  {
    name: <FontAwesomeIcon icon={['fab', 'facebook']} />,
    path: 'https://www.facebook.com/',
    key: 'Facebook'
  }
];

export { MenuConfig, ExternalLinksConfig };


import React      from 'react';
import Base       from './modules/Base/component';
import Home       from './modules/Home/component';
import Experience from './modules/Experience/component';
import Tools      from './modules/Tools/component';
import Works      from './modules/Works/component';

const routes = [
  {
    name: 'Base',
    component: Base,
    routes: [
      {
        path: '/',
        name: 'Home',
        exact: true,
        component: Home
      },
      {
        path: '/experience',
        name: 'Experience',
        exact: true,
        component: Experience
      },
      {
        path: '/tools',
        name: 'Tools',
        exact: true,
        component: Tools
      },
      {
        path: '/works',
        name: 'Works',
        exact: true,
        component: Works
      },
    ]
  }
];

export default routes;

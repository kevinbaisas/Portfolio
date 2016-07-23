/** @flow */
import { Modules } from '../actions/base';

export const getModules = () :Array<Object> => {
  return [
    {
      key: Modules.PROFILE,
      isAvatar: true,
      secondaryText: 'View Profile',
      path: '/profile'
    },
    {
      key: Modules.HOME,
      primaryText: 'Home',
      path: '/home',
      nestedItems: []
    },
    {
      key: Modules.EVENTS,
      primaryText: 'Events',
      path: '/events',
      nestedItems: [
        {
          key: Modules.EVENTS_CALENDAR,
          primaryText: 'Calendar',
          path: '/events/calendar',
          nestedItems: []
        },
        {
          key: Modules.EVENTS_UPCOMING,
          primaryText: 'Upcoming',
          path: '/events/upcoming',
          nestedItems: []
        },
        {
          key: Modules.EVENTS_PAST,
          primaryText: 'Past',
          path: '/events/past',
          nestedItems: []
        },
        {
          key: Modules.EVENTS_APPLICATIONS,
          primaryText: 'Applications',
          path: '/events/applications',
          nestedItems: []
        },
        {
          key: Modules.EVENTS_INVITATIONS,
          primaryText: 'Invitations',
          path: '/events/invitations',
          nestedItems: []
        }
      ]
    },
    {
      key: Modules.FEED,
      primaryText: 'Feed',
      path: '/feed',
      nestedItems: []
    },
    {
      key: Modules.MESSAGES,
      primaryText: 'Messages',
      path: '/messages',
      nestedItems: []
    },
    {
      key: Modules.FOLLOWING,
      primaryText: 'Following',
      path: '/following',
      nestedItems: [
        {
          key: Modules.FOLLOWING_PEOPLE,
          primaryText: 'People',
          path: '/following/people',
          nestedItems: []
        },
        {
          key: Modules.FOLLOWING_ORGANIZATIONS,
          primaryText: 'Organizations',
          path: '/following/organizations',
          nestedItems: []
        }
      ]
    },
    {
      key: Modules.NOTIFICATIONS,
      primaryText: 'Notifications',
      path: '/notifications',
      nestedItems: []
    },
    {
      key: 'menu_divider',
      isDivider: true
    },
    {
      key: 'help_settings',
      isSubheader: true,
      subheaderText: 'Help & Settings'
    },
    {
      key: Modules.ACCOUNT_SETTINGS,
      primaryText: 'Account Settings',
      path: '/settings',
      nestedItems: []
    },
    {
      key: Modules.TERMS_POLICY,
      primaryText: 'Terms & Policy',
      path: '/terms',
      nestedItems: []
    },
    {
      key: Modules.PRIVACY,
      primaryText: 'Privacy',
      path: '/privacy',
      nestedItems: []
    },
    {
      key: Modules.ABOUT,
      primaryText: 'About',
      path: '/about',
      nestedItems: []
    },
    {
      key: Modules.AUTH,
      primaryText: 'Logout',
      path: '/auth',
      nestedItems: []
    }
  ];
};

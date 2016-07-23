/** @flow */

export const Modules: Object = {
  PROFILE: 'profile',
  HOME: 'home',
  EVENTS: 'events',
  EVENTS_CALENDAR: 'events-calendar',
  EVENTS_UPCOMING: 'events-upcoming',
  EVENTS_PAST: 'events-past',
  EVENTS_APPLICATIONS: 'events-applications',
  EVENTS_INVITATIONS: 'events-invitations',
  FEED: 'feed',
  MESSAGES: 'messages',
  FOLLOWING: 'following',
  FOLLOWING_PEOPLE: 'following-people',
  FOLLOWING_ORGANIZATIONS: 'following-organizations',
  NOTIFICATIONS: 'notifications',
  ACCOUNT_SETTINGS: 'account-settings',
  TERMS_POLICY: 'terms-policy',
  PRIVACY: 'privacy',
  ABOUT: 'about',
  AUTH: 'auth',
  LOGIN: 'login',
  REGISTER: 'register',
  LOGOUT: 'logout'
};

export const SET_ACTIVE_MODULE: string = 'SET_ACTIVE_MODULE';
export const setActiveModule: Function = (activeModule: string = Modules.HOME) :Object => {
  return { type: SET_ACTIVE_MODULE, activeModule };
};

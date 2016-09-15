/** @flow */

export const Modules: Object = {
  HOME: 'home',
  EXPERIENCE: 'experience',
  WORKS: 'works',
  TOOLS: 'tools'
};

export const SET_ACTIVE_MODULE: string = 'SET_ACTIVE_MODULE';
export const setActiveModule: Function = (activeModule: string = Modules.HOME) :Object => {
  return { type: SET_ACTIVE_MODULE, activeModule };
};

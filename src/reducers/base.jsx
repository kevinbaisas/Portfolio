
import { SET_ACTIVE_MODULE }  from '../actions';
import { HOME }               from '../constants';

const currentModule = (state = HOME, action) => {

  switch(action.type){
    case SET_ACTIVE_MODULE:
      return action.currentModule;
    default:
      return state;
  }

};

export default currentModule;

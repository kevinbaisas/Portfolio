
import { combineReducers }          from 'redux';
import { routerReducer as router }  from 'react-router-redux';
import currentModule                from './base';

const rootReducer = combineReducers({ router, currentModule });

export default rootReducer;

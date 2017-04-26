
import { createStore, compose } from 'redux';
import { routerMiddleware }     from 'react-router-redux';
import rootReducer              from './reducers';
import apply                    from './middlewares';

const initialize = (preloadedState = {}, history = null) => {
  const routeMiddleware = routerMiddleware(history);
  const middlewares = apply(routeMiddleware);
  const enhancers = compose(middlewares);
  const store = createStore(rootReducer, preloadedState, enhancers);

  return store;
};

export default initialize

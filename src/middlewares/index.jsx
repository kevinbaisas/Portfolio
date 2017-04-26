
import { applyMiddleware }  from 'redux';
import { createLogger }     from 'redux-logger'

const apply = (...middlewares) => {

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();

    return applyMiddleware(...middlewares, logger);
  }

  return applyMiddleware(...middlewares);
}

export default apply;

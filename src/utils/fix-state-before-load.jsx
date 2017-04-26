
import Promise from 'bluebird';

const FixStateBeforeLoad = (dispatch, components) => {
  const prerequesites = Object.keys(components).reduce(
    (prev, current) => {
      return components[current] ?
        (components[current].required || []).concat(prev) : prev;
      },
    []
  );

  const promises = prerequesites.map(prerequesite => {
    const { action, params } = prerequesite;
    return dispatch(action(...params));
  });

  return Promise.all(promises);
}

export default FixStateBeforeLoad;

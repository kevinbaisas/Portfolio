
import React              from 'react';
import Helmet             from 'react-helmet';
import ReactDOMServer     from 'react-dom/server';
import { Provider }       from 'react-redux';
import { StaticRouter }   from 'react-router';
import { renderRoutes }   from 'react-router-config';

import routes             from '../routes';

export default class ViewHandler {

  getInitialComponent(store, context) {
    return (
      <Provider store={ store }>
        <StaticRouter location={ context.request.originalUrl } context={ context }>
          { renderRoutes(routes) }
        </StaticRouter>
      </Provider>
    );
  }

  getHTMLPrototype(component, initialState) {
    const componentHTML = ReactDOMServer.renderToString(component);

    const head = Helmet.renderStatic();

    return `
      <!DOCTYPE html>
      <html lang='en-us'>
        <head>
          ${ head.title }
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          ${ head.meta }
          ${ head.link }
          ${ head.script }
          <link rel='stylesheet' type='text/css' href='/dist/css/material.min.css' />
          <link rel='stylesheet' type='text/css' href='/dist/css/main.css' />
          <link rel='shortcut icon' href='favicon.ico' type='image/x-icon'>
        </head>
        <body>
          <div id='root-contianer' class='mdl-layout mdl-js-layout mdl-layout--fixed-header'>${ componentHTML }</div>
          <script type='application/javascript'>
            window.__INITIAL_STATE__ = ${ JSON.stringify(initialState) };
          </script>
          <script type='application/javascript' src='/dist/js/material.min.js'></script>
          <script type='application/javascript' src='/dist/index.js'></script>
        </body>
      </html>
    `;
  }

  renderView(store, context) {
    const InitialComponent = this.getInitialComponent(store, context);
    const initialState = store.getState();

    return this.getHTMLPrototype(InitialComponent, initialState);
  }
}

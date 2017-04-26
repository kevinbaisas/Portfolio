
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { renderRoutes }     from 'react-router-config';
import PropTypes            from 'prop-types';
import Nav                  from '../Nav/component';
import NavigationDrawer     from '../NavigationDrawer/component';
import Footer               from '../Footer/component';
import routes               from '../../routes';

class Base extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { routes } = this.props;

    return (
      <div class='base'>
        <div class='mdl-layout mdl-js-layout mdl-layout--fixed-header'>
          <Nav navItems={ routes } />
          <NavigationDrawer navItems={ routes } />
          <main class='mdl-layout__content'>
            { renderRoutes(routes) }
            <Footer />
          </main>
        </div>
      </div>
    );
  }
};

Base.propTypes = {
  routes: PropTypes.array.isRequired
}

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = (state, props) => {
  const { routes } = props.route;

  return { routes };
}
export default connect(mapStateToProps, mapDispatchToProps)(Base);

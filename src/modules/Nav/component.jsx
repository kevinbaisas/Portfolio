
import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import NavItem              from '../NavItem/component';

export default class Nav extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.navItems.map(navItem => {
      return (<NavItem key={ navItem.path } navItem={ navItem } />);
    });

    return (
      <header class='mdl-layout__header mdl-layout__header--waterfall'>
        <div class='mdl-layout__header-row'>
          <span class='mdl-layout-title'>Kevin Baisas</span>
          <div class='mdl-layout-spacer mdl-layout--large-screen-only'></div>
          <nav class='mdl-navigation mdl-layout--large-screen-only'>
            { items }
          </nav>
        </div>
      </header>
    );
  }
};

Nav.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({
    name:   PropTypes.string.isRequired,
    path:   PropTypes.string.isRequired
  }).isRequired)
}

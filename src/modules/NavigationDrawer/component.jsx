
import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import NavItem              from '../NavItem/component';

export default class NavigationDrawer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.navItems.map(navItem => {
      return (<NavItem key={ navItem.path } navItem={ navItem } />);
    });

    return (
      <div class='mdl-layout__drawer mdl-layout--small-screen-only'>
        <span class='drawer-title'>
          <span class='title-name'>Kevin Baisas</span>
        </span>
        <nav class='mdl-navigation'>
          { items }
        </nav>
      </div>
    );
  }
};

NavigationDrawer.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({
    name:   PropTypes.string.isRequired,
    path:   PropTypes.string.isRequired
  }).isRequired)
}

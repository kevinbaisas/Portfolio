/** @flow */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ObjectHandler from '../../lib/ObjectHandler';

const NavItem = class NavItem extends Component {

  props: Object;

  render() :Object {
    const { item }: Object = this.props;

    return (
      <div className={ ObjectHandler.get('key', item) }>
        <Link key={ ObjectHandler.get('key', item) }
          className='mdl-navigation__link' to={ ObjectHandler.get('path', item) }>
          { ObjectHandler.get('primaryText', item) }
        </Link>
      </div>
    );
  }
};

NavItem.propTypes = {
  item: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch: Function) :Object => {
  return { dispatch };
};

const mapStateToProps = (state: Object, props: Object) :Object => {
  const { item }: Object = props;

  return { item };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavItem);

/** @flow */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ObjectHandler from '../../lib/ObjectHandler';

const NavItemHeader = class NavItemHeader extends Component {

  props: Object;

  render() :Object {
    const { item }: Object = this.props;

    return (
      <div key={ ObjectHandler.get('key', item) } className={ ObjectHandler.get('key', item) }>
        <Link className="mdl-list__item mdl-list__item--two-line" to={ ObjectHandler.get('path', item) }>
          <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-avatar">person</i>
            <span>Kevin Baisas</span>
            <span class="mdl-list__item-sub-title">{ ObjectHandler.get('secondaryText', item) }</span>
          </span>
        </Link>
      </div>
    );
  }
};

NavItemHeader.propTypes = {
  item: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch: Function) :Object => {
  return { dispatch };
};

const mapStateToProps = (state: Object, props: Object) :Object => {
  const { item }: Object = props;

  return { item };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavItemHeader);

/** @flow */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ObjectHandler from '../../lib/ObjectHandler';
import NavItem from './NavItem';

const NestedNavItem = class NestedNavItem extends Component {

  props: Object;

  isOpen: bool = false;

  childrenContainer: Object;

  expandChildren: Function = () :void => {
    this.isOpen = !this.isOpen;

    if(this.childrenContainer != null) {
      this.childrenContainer.className = this.isOpen ? 'children open' : 'children';
    }
  };

  childrenReference = (ref) :void => {
    this.childrenContainer = ref
  };

  constructor() :void {
    super();
    this.expandChildren = this.expandChildren.bind(this);
  }

  render() :Object {
    const { item }: Object = this.props;

    const nestedItems: Array<Object> = ObjectHandler.get('nestedItems', item)
    .map((item: Object) :Object => {
      return  <NavItem key={ ObjectHandler.get('key', item) } item={ item } />
    });

    return (
      <div className={ ObjectHandler.get('key', item) }>
        <a key={ ObjectHandler.get('key', item) } className='has-items mdl-navigation__link'
          onClick={ this.expandChildren }>
          { ObjectHandler.get('primaryText', item) }
          <i className="material-icons">keyboard_arrow_down</i>
        </a>
        <div className='children' ref={ this.childrenReference }>
          { nestedItems }
        </div>
      </div>
    );
  }
};

NestedNavItem.propTypes = {
  item: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch: Function) :Object => {
  return { dispatch };
};

const mapStateToProps = (state: Object, props: Object) :Object => {
  const { item }: Object = props;

  return { item };
};

export default connect(mapStateToProps, mapDispatchToProps)(NestedNavItem);

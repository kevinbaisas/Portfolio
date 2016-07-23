/** @flow */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ObjectHandler from '../../lib/ObjectHandler';
import NavItemHeader from './NavItemHeader';
import NavItem from './NavItem';
import NestedNavItem from './NestedNavItem';

const Nav = class Nav extends Component {

  props: Object;

  getListItem: Function = (item: Object = {}) :Object => {
    let listItem: Object = <h1 key={ ObjectHandler.get('key', item) }>Object hasnt been configured</h1>;
    if(ObjectHandler.has('isAvatar', item) && ObjectHandler.eq('isAvatar', item, true)) {
      listItem = <NavItemHeader key={ ObjectHandler.get('key', item) } item={ item } />
    }
    else if(ObjectHandler.has('isDivider', item) && ObjectHandler.eq('isDivider', item, true)) {
      listItem = <hr key={ ObjectHandler.get('key', item) } />
    }
    else if(ObjectHandler.has('isSubheader', item) && ObjectHandler.eq('isSubheader', item, true)) {
      listItem = <span className='nav-subheader' key={ ObjectHandler.get('key', item) }>
        { ObjectHandler.get('subheaderText', item) }
      </span>
    }
    else if(ObjectHandler.has('isAuth', item) && ObjectHandler.eq('isAuth', item, true)) {
      listItem = <div key={ ObjectHandler.get('key', item) } className={ item.key }>
        <Link key={ item.key }>Logout</Link>
      </div>
    }
    else {
      if(ObjectHandler.has('nestedItems', item)){
        const isEmpty = item.nestedItems.length > 0 ? false : true;
        if(!isEmpty){
          listItem = <NestedNavItem key={ ObjectHandler.get('key', item) } item={ item } />
        }
        else {
          listItem = <NavItem key={ ObjectHandler.get('key', item) } item={ item } />
        }
      }
    }

    return listItem;
  };

  constructor() :void {
    super();
    this.getListItem = this.getListItem.bind(this);
  }

  render() :Object {
    const { activeModule, drawerList }: {
      activeModule: string,
      drawerList: Array<Object>
    } = this.props;

    const children: Array<Object> = drawerList.map((listItem: Object) :Object => {
      return this.getListItem(listItem);
    });

    return (
      <nav className='mdl-navigation'>
        { children }
      </nav>
    );
  }
};

Nav.propTypes = {
  activeModule: PropTypes.string.isRequired,
  drawerList: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapDispatchToProps = (dispatch: Function) :Object => {
  return { dispatch };
};

const mapStateToProps = (state: Object, props: Object) :Object => {
  const { activeModule }: {
    activeModule: string
  } = state;

  const { drawerList }: {
    drawerList: Array<Object>
  } = props;

  return { activeModule, drawerList };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

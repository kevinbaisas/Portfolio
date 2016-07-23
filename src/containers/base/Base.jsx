/** @flow */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { setActiveModule, Modules } from '../../actions/base';
import { getModules } from '../../factories/Modules';
import SearchBar from '../../components/base/SearchBar';
import Nav from '../../components/base/Nav';
import AssetsHandler from '../../lib/AssetsHandler';

const Base = class Base extends Component {

  props: Object;

  getDrawerItems :Function = () :Array<Object> => {
    return getModules();
  };

  constructor() :void {
    super();
    this.getDrawerItems = this.getDrawerItems.bind(this);
  }

  render() :Object {
    const { children, activeModule }: {
      children: Object,
      activeModule: string
    } = this.props;

    const drawerList: Array<Object> = this.getDrawerItems();

    return (
      <div className='base'>
        <div className='mdl-layout mdl-js-layout mdl-layout--fixed-header'>
          <header className='ch-header mdl-layout__header mdl-layout__header--waterfall'>
            <div className='mdl-layout__header-row'>
              <span className="mdl-layout-title">
                <Link className='header-title-logo' to='/' />
              </span>
              <div className='mdl-layout-spacer'></div>
              <SearchBar id='header-search' onSearchAction={ () => { console.log('hello') } } />
            </div>
          </header>
          <div className='mdl-layout__drawer'>
            <Nav drawerList={ drawerList } />
          </div>
          <main className='mdl-layout__content'>
            { children }
          </main>
        </div>
      </div>
    );
  }
};

Base.propTypes = {
  activeModule: PropTypes.string.isRequired,
  children: PropTypes.node
};

const mapDispatchToProps = (dispatch: Function) :Object => {
  return { dispatch };
};

const mapStateToProps = (state: Object, props: Object) :Object => {
  const { activeModule  }: {
    activeModule: string,
  } = state;
  return { activeModule };
};

export default connect(mapStateToProps, mapDispatchToProps)(Base);

/** @flow */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { setActiveModule, Modules } from '../../actions/base';

const Base = class Base extends Component {

  props: Object;

  getNavClass: Function = (currentModule: string) :string => {
    const { activeModule }: {
      activeModule: string
    } = this.props;

    return currentModule == activeModule ? 'nav-link mdl-tabs__tab is-active' : 'nav-link mdl-tabs__tab';
  };

  constructor() :void {
    super();
    this.getNavClass = this.getNavClass.bind(this);
  }

  render() :Object {
    const { children }: {
      children: Object
    } = this.props;

    return (
      <div className='base'>
        <div className='mdl-layout mdl-js-layout mdl-layout--fixed-header'>
          <header className='mdl-layout__header mdl-layout__header--waterfall'>
            <div className='mdl-layout__header-row'>
              <span className='mdl-layout-title'></span>
              <div className='mdl-layout-spacer'></div>
            </div>
            <div className='mdl-tabs'>
              <nav className='mdl-tabs__tab-bar'>
                <Link to='/home' className={ this.getNavClass('home') }>Home</Link>
                <Link to='/experience' className={ this.getNavClass('experience') }>Experience</Link>
                <Link to='/tools' className={ this.getNavClass('tools') }>Tools</Link>
                <Link to='/works' className={ this.getNavClass('works') }>Works</Link>
              </nav>
            </div>
          </header>
          <main className='mdl-layout__content'>
            { children }
            <footer className='mdl-mini-footer'>
              <div className='mdl-mini-footer__left-section'>
                <span>2016 Kevin Baisas</span>
              </div>
              <div className='mdl-mini-footer__right-section'>
                <span>kevin.baisas@gmail.com</span>
              </div>
            </footer>
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

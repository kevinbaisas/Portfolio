/** @flow */

import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import AppHelmet from '../../components/base/AppHelmet';
import { Modules, setActiveModule } from '../../actions/base';

const Works = class Works extends Component {

  props: Object;

  getMeta = () :Array<Object> => {
    return [
      {
        'name': 'description',
        'content': 'Kevin Baisas portfolio. Software Engineer. Web Developer.'
      },
      {
        'property': 'og:type',
        'content': 'experience'
      }
    ];
  };

  getLink = () :Array<Object> => {
    return [
      {
        'rel': 'canonical',
        'href': 'http://kevinbaisas.xyz/home'
      }
    ];
  };

  getScript = () :Array<Object> => {
    return [
      {
        'type': 'application/ld+json',
        innerHTML: `{
          '@context': 'http://schema.org'
        }`
      }
    ];
  };

  constructor() :void {
    super();
    this.getMeta = this.getMeta.bind(this);
    this.getLink = this.getLink.bind(this);
    this.getScript = this.getScript.bind(this);
  }

  componentDidMount() :void {
    const { dispatch }: {
      dispatch: Function
    } = this.props
    dispatch(setActiveModule(Modules.WORKS));
  }

  render() :Object {

    return (
      <div className='home'>
        <h1 className='black-hat'>Works | Kevin Baisas</h1>
        <AppHelmet
          title='Works'
          meta={ this.getMeta() }
          link={ this.getLink() }
          script={ this.getScript() }
        />
        <div className='home-banner-section mdl-typography--text-center"'>
          <span>Works</span>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch: Function) :Object => {
  return { dispatch };
};

const mapStateToProps = (state: Object, props: Object) :Object => {
  return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(Works);

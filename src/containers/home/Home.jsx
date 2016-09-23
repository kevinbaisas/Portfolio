/** @flow */

import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import AppHelmet from '../../components/base/AppHelmet';
import { Modules, setActiveModule } from '../../actions/base';

const Home = class Home extends Component {

  props: Object;

  getMeta = () :Array<Object> => {
    return [
      {
        'name': 'description',
        'content': 'Kevin Baisas portfolio. Senior Software Engineer. Web Developer.'
      },
      {
        'property': 'og:type',
        'content': 'website'
      },
      {
        'property': 'og:url',
        'content': 'http://www.kevinbaisas.xyz/home'
      },
      {
        'property': 'og:title',
        'content': 'Home'
      },
      {
        'property': 'og:site_name',
        'content': 'Kevin Baisas'
      }
    ];
  };

  getLink = () :Array<Object> => {
    return [
      {
        'rel': 'canonical',
        'href': 'http://www.kevinbaisas.xyz/home'
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
    dispatch(setActiveModule(Modules.HOME));
  }

  render() :Object {

    return (
      <div className='home'>
        <h1 className='black-hat'>Home | Kevin Baisas</h1>
        <AppHelmet
          title='Home'
          meta={ this.getMeta() }
          link={ this.getLink() }
          script={ this.getScript() }
        />
        <div className='home-banner-section mdl-typography--text-center"'>
          <div className='banner-font banner-slogan'>
            <h1>eat. sleep. code. repeat.</h1>
          </div>
          <div className='banner-font banner-sub-slogan'>
            <a target='_blank' href='https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/cv/kevinbaisas.pdf' className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored'>
              DOWNLOAD CV
            </a>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

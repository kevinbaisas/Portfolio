/** @flow */

import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import AppHelmet from '../../components/base/AppHelmet';
import { Modules, setActiveModule } from '../../actions/base';
import EventList from '../../components/events/EventList';

const Home = class Home extends Component {

  props: Object;

  getMeta = () :Array<Object> => {
    return [
      {
        'name': 'description',
        'content': 'An even focused system with social, messaging, analytics integration'
      },
      {
        'property': 'og:type',
        'content': 'home'
      }
    ];
  };

  getLink = () :Array<Object> => {
    return [
      {
        'rel': 'canonical',
        'href': 'http://localhost:5000/home'
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
        <AppHelmet
          title='Home'
          meta={ this.getMeta() }
          link={ this.getLink() }
          script={ this.getScript() }
        />
        <div className='home-banner-section mdl-typography--text-center"'>
          <div className='banner-font banner-slogan'>
            <h1>Lorem ipsum dolor sit amet.</h1>
          </div>
          <div className='banner-font banner-sub-slogan'>
            <h2>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
          </div>
        </div>
        <EventList id='home-upcomming-events' list={ [] } />
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


import React, { Component } from 'react';
import { connect }          from 'react-redux';
import PropTypes            from 'prop-types';
import { setCurrentModule } from '../../actions';
import { HOME }             from '../../constants';
import AppHelmet            from '../AppHelmet/component';

class Home extends Component {

  getMeta() {
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
        'content': 'http://kevinbaisas.com/home'
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

  getLink() {
    return [
      {
        'rel': 'canonical',
        'href': 'http://kevinbaisas.com/home'
      }
    ];
  };

  getScript() {
    return [
      {
        'type': 'application/ld+json',
        innerHTML: `{
          '@context': 'http://schema.org'
        }`
      },
      {
        'type': 'application/javascript',
        innerHTML: `
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-60765270-1', 'auto');
          ga('send', 'pageview')
        `
      }
    ];
  };

  static required = [
    { action: setCurrentModule, params: [HOME] }
  ];

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.setCurrentModule();
  }

  render() {
    return (
      <div class='home'>
        <h1 class='black-hat'>Home | Kevin Baisas</h1>
        <AppHelmet title='Home | Kevin Baisas' meta={ this.getMeta() } link={ this.getLink() } script={ this.getScript() } />
        <div class='home-banner-section mdl-typography--text-center'>
          <div class='banner-font banner-slogan'>
            <h1>eat. sleep. code. repeat.</h1>
          </div>
          <div class='banner-font banner-sub-slogan'>
            <a target='_blank' rel='noopener' href='https://d3eikmgunls5kv.cloudfront.net/cv/KEVIN+MAGBOO+BAISAS.pdf' className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored'>
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  setCurrentModule: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  setCurrentModule: () => dispatch(
    setCurrentModule(HOME)
  )
})

const mapStateToProps = (state, props) => {
  return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

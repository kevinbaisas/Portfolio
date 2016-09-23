/** @flow */

import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import AppHelmet from '../../components/base/AppHelmet';
import { Modules, setActiveModule } from '../../actions/base';

const Experience = class Experience extends Component {

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
        'content': 'http://www.kevinbaisas.xyz/experience'
      },
      {
        'property': 'og:title',
        'content': 'Experience'
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
        'href': 'http://www.kevinbaisas.xyz/experience'
      }
    ];
  };

  getScript = () :Array<Object> => {
    return [
      {
        'type': 'application/ld+json',
        innerHTML: `{
          '@context': 'http://schema.org',
          '@type': 'Experience List',
          'url': 'http://www.kevinbaisas.xyz/experience',
          'numberOfItems': '2',
          'itemListElement': [
            {
              '@type': 'Experience',
              'name': 'Senior Software Engineer',
              'description': 'Senior Software Engineer. Yilinker Philippines Inc.'
            },
            {
              '@type': 'Experience',
              'name': 'Web Developer',
              'description': 'Senior Software Engineer. Starfish Internet Solutions.'
            }
          ]
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
    dispatch(setActiveModule(Modules.EXPERIENCE));
  }

  render() :Object {

    return (
      <div className='experience'>
        <h1 className='black-hat'>Experience | Kevin Baisas</h1>
        <AppHelmet
          title='Experience'
          meta={ this.getMeta() }
          link={ this.getLink() }
          script={ this.getScript() }
        />
        <div className='experience-container'>
          <ul className='mdl-list'>
            <li className='mdl-list__item mdl-list__item--three-line'>
              <span className='mdl-list__item-primary-content'>
                <a target='_blank' href='https://yilinker.com/' className='material-icons mdl-list__item-avatar yilinker'></a>
                <a className='experience-position' target='_blank' href='https://yilinker.com'>Senior Software Engineer</a>
                <span className='mdl-list__item-text-body'>
                  <a className='outer-link' target='_blank' href='https://yilinker.com'>Easyshop/Yilinker Philippines Inc</a> <br />
                  July 2015 - August 2016
                </span>
              </span>
            </li>
            <li className='mdl-list__item job-description'>
              <ul>
                <li>Ensure that the data or services requested by the front-end system are delivered through programmatic means.</li>
                <li>Creates API that is used by mobile app developers.</li>
                <li>Create and maintain the entire back-end which consists of the core application logic, databases, application integration, API and other back-end processes.</li>
                <li>Creates unit testing to ensure that the application is production ready.</li>
                <li>Optimize the application to handle thousands of request.</li>
                <li>Integrate the best tools to achieve application&#39;s best performance.</li>
              </ul>
            </li>
            <li className='mdl-list__item mdl-list__item--three-line'>
              <span className='mdl-list__item-primary-content'>
                <a target='_blank' href='http://www.starfi.sh/' className='material-icons mdl-list__item-avatar starfish'></a>
                <a className='experience-position' target='_blank' href='http://www.starfi.sh/'>Web Developer</a>
                <span className='mdl-list__item-text-body'>
                  <a className='outer-link' target='_blank' href='http://www.starfi.sh/'>Starfish Internet Solutions</a> <br />
                  April 2013 - January 2015
                </span>
              </span>
            </li>
            <li className='mdl-list__item job-description'>
              <ul>
                <li>Ensure that the data or services requested by the front-end system are delivered through programmatic means.</li>
                <li>Create and maintain the entire back-end which consists of the core application logic, databases, application integration, API and other back-end processes.</li>
                <li>Performs testing and debugging of any back-end system.</li>
                <li>Project Planning.</li>
                <li>Research and Development.</li>
                <li>Supervise and train other juniors.</li>
              </ul>
            </li>
          </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Experience);

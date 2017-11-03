
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import PropTypes            from 'prop-types';
import { setCurrentModule } from '../../actions';
import { EXPERIENCE }       from '../../constants';
import AppHelmet            from '../AppHelmet/component';

class Experience extends Component {

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
        'content': 'http://kevinbaisas.com/experience'
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

  getLink() {
    return [
      {
        'rel': 'canonical',
        'href': 'http://kevinbaisas.com/experience'
      }
    ];
  };

  getScript() {
    return [
      {
        'type': 'application/ld+json',
        innerHTML: `{
          '@context': 'http://schema.org',
          '@type': 'Experience List',
          'url': 'http://kevinbaisas.com/experience',
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

  static required = [
    { action: setCurrentModule, params: [EXPERIENCE] }
  ];

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.setCurrentModule();
  }

  render() {
    return (
      <div class='experience'>
        <h1 class='black-hat'>Experience | Kevin Baisas</h1>
        <AppHelmet title='Experience | Kevin Baisas' meta={ this.getMeta() } link={ this.getLink() } script={ this.getScript() } />
        <div class='experience-container'>
          <ul class='mdl-list'>
            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='http://buyer.yilinker.cn/' class='material-icons mdl-list__item-avatar yilinker'></a>
                <a class='experience-position' target='_blank' href='http://buyer.yilinker.cn'>Senior Software Engineer</a>
                <span class='mdl-list__item-text-body'>
                  <a class='outer-link' target='_blank' href='http://buyer.yilinker.cn'>Easyshop/Yilinker Philippines Inc</a> <br />
                  July 2015 - August 2016
                </span>
              </span>
            </li>
            <li class='mdl-list__item job-description'>
              <ul>
                <li>Ensure that the data or services requested by the front-end system are delivered through programmatic means.</li>
                <li>Creates API that is used by mobile app developers.</li>
                <li>Create and maintain the entire back-end which consists of the core application logic, databases, application integration, API and other back-end processes.</li>
                <li>Creates unit testing to ensure that the application is production ready.</li>
                <li>Optimize the application to handle thousands of request.</li>
                <li>Integrate the best tools to achieve application&#39;s best performance.</li>
              </ul>
            </li>
            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='http://www.starfi.sh/' class='material-icons mdl-list__item-avatar starfish'></a>
                <a class='experience-position' target='_blank' href='http://www.starfi.sh/'>Web Developer</a>
                <span class='mdl-list__item-text-body'>
                  <a class='outer-link' target='_blank' href='http://www.starfi.sh/'>Starfish Internet Solutions</a> <br />
                  April 2013 - January 2015
                </span>
              </span>
            </li>
            <li class='mdl-list__item job-description'>
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
}

Experience.propTypes = {
  setCurrentModule: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  setCurrentModule: () => dispatch(
    setCurrentModule(EXPERIENCE)
  )
})

const mapStateToProps = (state, props) => {
  return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(Experience);

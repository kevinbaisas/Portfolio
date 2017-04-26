
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import PropTypes            from 'prop-types';
import { setCurrentModule } from '../../actions';
import { TOOLS }            from '../../constants';
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
        'content': 'http://www.kevinbaisas.xyz/tools'
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
        'href': 'http://www.kevinbaisas.xyz/tools'
      }
    ];
  };

  getScript() {
    return [
      {
        'type': 'application/ld+json',
        innerHTML: `{
          '@context': 'http://schema.org',
          '@type': 'Project List',
          'url': 'http://www.kevinbaisas.xyz/works',
          'numberOfItems': '19',
          'itemListElement': [
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/tools/symfony.svg',
              'url': 'https://symfony.com/',
              'name': 'Symfony',
              'description': 'The leading PHP framework built on top of the Symfony Components.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/tools/laravel.svg',
              'url': 'https://laravel.com/',
              'name': 'Laravel',
              'description': 'Laravel is a PHP web application framework with expressive, elegant syntax.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/tools/express.svg',
              'url': 'https://expressjs.com/',
              'name': 'Express',
              'description': 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/tools/express.svg',
              'url': 'https://expressjs.com/',
              'name': 'Koa',
              'description': 'Next generation web framework for Node.js'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/tools/express.svg',
              'url': 'https://expressjs.com/',
              'name': 'Restify',
              'description': 'A Node.js module built specifically to enable you to build correct REST web services'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/tools/express.svg',
              'url': 'https://expressjs.com/',
              'name': 'Loopback',
              'description': 'LoopBack is a highly-extensible, open-source Node.js framework'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/tools/react.svg',
              'url': 'https://facebook.github.io/react/index.html',
              'name': 'ReactJS',
              'description': 'React is a JavaScript library for creating user interfaces by Facebook and Instagram.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/tools/flux.svg',
              'url': 'https://facebook.github.io/flux/',
              'name': 'ReactJS + Flux',
              'description': 'Flux is the application architecture that Facebook uses for building client-side web applications.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/tools/redux.svg',
              'url': 'http://redux.js.org/',
              'name': 'Redux',
              'description': 'Redux evolves the ideas of Flux, but avoids its complexity by taking cues from Elm.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/tools/angular.svg',
              'url': 'https://angularjs.org/',
              'name': 'AngularJS',
              'description': 'Declarative templates with data-binding, MVC, and dependency injection all implemented with pure client-side JavaScript.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/tools/phoenix.svg',
              'url': 'http://www.phoenixframework.org/',
              'name': 'Phoenix Framework',
              'description': 'A productive web framework that does not compromise speed and maintainability.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/tools/mysql.svg',
              'url': 'https://www.mysql.com/',
              'name': 'MySQL',
              'description': 'MySQL is an open-source relational database management system (RDBMS).'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/tools/mongodb.svg',
              'url': 'https://www.mongodb.com/',
              'name': 'MongoDB',
              'description': 'MongoDB is a open-source cross-platform document-oriented database (NoSQL).'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/tools/redis.svg',
              'url': 'http://redis.io/',
              'name': 'Redis',
              'description': 'Redis is an open source (BSD licensed), in-memory data structure store, used as database, cache and message broker.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/tools/elasticsearch.svg',
              'url': 'https://www.elastic.co/products/elasticsearch',
              'name': 'Elasticsearch',
              'description': 'Elasticsearch is a highly scalable open-source full-text search and analytics engine.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/tools/logstash.svg',
              'url': 'https://www.elastic.co/products/logstash',
              'name': 'Logstash',
              'description': 'Logstash is a tool to collect, process, and forward events and log messages.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/tools/kibana.svg',
              'url': 'https://www.elastic.co/products/kibana',
              'name': 'Kibana',
              'description': 'Kibana is a browser-based analytics and search interface for Elasticsearch that was developed primarily to view Logstash event data.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/tools/ionic.svg',
              'url': 'http://ionicframework.com/',
              'name': 'Ionic Framework',
              'description': 'Easy to build beautiful and interactive mobile apps using HTML5 and AngularJS.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/tools/docker.svg',
              'url': 'https://www.docker.com/',
              'name': 'Docker',
              'description': 'Docker is an open platform for developers and sysadmins to build, ship, and run distributed applications, whether on laptops, data center VMs, or the cloud.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/tools/socket-io.svg',
              'url': 'http://socket.io/',
              'name': 'Socket IO',
              'description': 'Aims to make realtime apps possible in every browser and mobile device, blurring the differences between the different transport mechanisms.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/tools/flow.svg',
              'url': 'http://reactivex.io/',
              'name': 'RxJs',
              'description': 'RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/tools/android.svg',
              'url': 'https://developer.android.com/',
              'name': 'Android',
              'description': 'Android software development is the process by which new applications are created for the Android operating system.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/tools/android.svg',
              'url': 'https://aws.amazon.com/',
              'name': 'Amazon Web Services',
              'description': 'Amazon Web Services (AWS) offers a suite of cloud-computing services that make up an on-demand computing platform.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/tools/varnish.svg',
              'url': 'https://varnish-cache.org/',
              'name': 'Varnish',
              'description': 'Varnish Cache is a web application accelerator also known as a caching HTTP reverse proxy.'
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
    { action: setCurrentModule, params: [TOOLS] }
  ];

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.setCurrentModule();
  }

  render() {
    return (
      <div class='tools'>
        <h1 class='black-hat'>Tools | Kevin Baisas</h1>
        <AppHelmet title='Tools | Kevin Baisas' meta={ this.getMeta() } link={ this.getLink() } script={ this.getScript() } />
        <div class='tools-container'>
          <ul class='demo-list-three mdl-list'>

            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='https://symfony.com/' class='material-icons mdl-list__item-avatar symfony'></a>
                <a target='_blank' href='https://symfony.com/'>Symfony</a>
                <span class='mdl-list__item-text-body'>
                  The leading PHP framework built on top of the Symfony Components.
                </span>
              </span>
            </li>

            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='https://laravel.com/' class='material-icons mdl-list__item-avatar laravel'></a>
                <a target='_blank' href='https://laravel.com/'>Laravel</a>
                <span class='mdl-list__item-text-body'>
                  Laravel is a PHP web application framework with expressive, elegant syntax.
                </span>
              </span>
            </li>

            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='http://koajs.com/' class='material-icons mdl-list__item-avatar koa'></a>
                <a target='_blank' href='http://koajs.com/'>Koa</a>
                <span class='mdl-list__item-text-body'>
                  Next generation web framework for Node.js
                </span>
              </span>
            </li>

            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='https://expressjs.com/' class='material-icons mdl-list__item-avatar express'></a>
                <a target='_blank' href='https://expressjs.com/'>Express</a>
                <span class='mdl-list__item-text-body'>
                  Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
                </span>
              </span>
            </li>

            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='http://restify.com/' class='material-icons mdl-list__item-avatar restify'></a>
                <a target='_blank' href='http://restify.com/'>Restify</a>
                <span class='mdl-list__item-text-body'>
                  A Node.js module built specifically to enable you to build correct REST web services
                </span>
              </span>
            </li>

            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='http://loopback.io/' class='material-icons mdl-list__item-avatar loopback'></a>
                <a target='_blank' href='http://loopback.io/'>Loopback</a>
                <span class='mdl-list__item-text-body'>
                  LoopBack is a highly-extensible, open-source Node.js framework
                </span>
              </span>
            </li>

            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='https://facebook.github.io/react/index.html' class='material-icons mdl-list__item-avatar react'></a>
                <a target='_blank' href='https://facebook.github.io/react/index.html'>ReactJS</a>
                <span class='mdl-list__item-text-body'>
                  React is a JavaScript library for creating user interfaces by Facebook and Instagram.
                </span>
              </span>
            </li>

            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='https://facebook.github.io/flux/' class='material-icons mdl-list__item-avatar flux'></a>
                <a target='_blank' href='https://facebook.github.io/flux/'>ReactJS + Flux</a>
                <span class='mdl-list__item-text-body'>
                  Flux is the application architecture that Facebook uses for building client-side web applications.
                </span>
              </span>
            </li>

            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='http://redux.js.org/' class='material-icons mdl-list__item-avatar redux'></a>
                <a target='_blank' href='http://redux.js.org/'>Redux</a>
                <span class='mdl-list__item-text-body'>
                  Redux evolves the ideas of Flux, but avoids its complexity by taking cues from Elm.
                </span>
              </span>
            </li>

            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='http://reactivex.io/' class='material-icons mdl-list__item-avatar rxjs'></a>
                <a target='_blank' href='http://reactivex.io/'>RxJS</a>
                <span class='mdl-list__item-text-body'>
                  RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.
                </span>
              </span>
            </li>

            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='https://angularjs.org/' class='material-icons mdl-list__item-avatar angular'></a>
                <a target='_blank' href='https://angularjs.org/'>AngularJS</a>
                <span class='mdl-list__item-text-body'>
                  Declarative templates with data-binding, MVC, and dependency injection all implemented with pure client-side JavaScript
                </span>
              </span>
            </li>

            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='http://www.phoenixframework.org/' class='material-icons mdl-list__item-avatar phoenix'></a>
                <a target='_blank' href='http://www.phoenixframework.org/'>Phoenix</a>
                <span class='mdl-list__item-text-body'>
                  A productive web framework that does not compromise speed and maintainability.
                </span>
              </span>
            </li>

            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='https://www.mysql.com/' class='material-icons mdl-list__item-avatar mysql'></a>
                <a target='_blank' href='https://www.mysql.com/'>MySQL</a>
                <span class='mdl-list__item-text-body'>
                  MySQL is an open-source relational database management system (RDBMS).
                </span>
              </span>
            </li>

            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='https://www.mongodb.com/' class='material-icons mdl-list__item-avatar mongodb'></a>
                <a target='_blank' href='https://www.mongodb.com/'>MongoDB</a>
                <span class='mdl-list__item-text-body'>
                  MongoDB is a open-source cross-platform document-oriented database (NoSQL).
                </span>
              </span>
            </li>

            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='http://redis.io/' class='material-icons mdl-list__item-avatar redis'></a>
                <a target='_blank' href='http://redis.io/'>Redis</a>
                <span class='mdl-list__item-text-body'>
                  Redis is an open source (BSD licensed), in-memory data structure store, used as database, cache and message broker.
                </span>
              </span>
            </li>

            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='https://www.elastic.co/products/elasticsearch' class='material-icons mdl-list__item-avatar elasticsearch'></a>
                <a target='_blank' href='https://www.elastic.co/products/elasticsearch'>Elasticsearch</a>
                <span class='mdl-list__item-text-body'>
                  Elasticsearch is a highly scalable open-source full-text search and analytics engine.
                </span>
              </span>
            </li>

            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='https://www.elastic.co/products/logstash' class='material-icons mdl-list__item-avatar logstash'></a>
                <a target='_blank' href='https://www.elastic.co/products/logstash'>Logstash</a>
                <span class='mdl-list__item-text-body'>
                  Logstash is a tool to collect, process, and forward events and log messages.
                </span>
              </span>
            </li>

            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='https://www.elastic.co/products/kibana' class='material-icons mdl-list__item-avatar kibana'></a>
                <a target='_blank' href='https://www.elastic.co/products/kibana'>Kibana</a>
                <span class='mdl-list__item-text-body'>
                  Kibana is a browser-based analytics and search interface for Elasticsearch that was developed primarily to view Logstash event data.
                </span>
              </span>
            </li>

            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='http://socket.io/' class='material-icons mdl-list__item-avatar socket-io'></a>
                <a target='_blank' href='http://socket.io/'>Socket IO</a>
                <span class='mdl-list__item-text-body'>
                  Aims to make realtime apps possible in every browser and mobile device, blurring the differences between the different transport mechanisms.
                </span>
              </span>
            </li>

            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='https://www.docker.com/' class='material-icons mdl-list__item-avatar docker'></a>
                <a target='_blank' href='https://www.docker.com/'>Docker</a>
                <span class='mdl-list__item-text-body'>
                  Docker is an open platform for developers and sysadmins to build, ship, and run distributed applications, whether on laptops, data center VMs, or the cloud.
                </span>
              </span>
            </li>

            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='https://aws.amazon.com/' class='material-icons mdl-list__item-avatar aws'></a>
                <a target='_blank' href='https://aws.amazon.com/'>Amazon Web Services</a>
                <span class='mdl-list__item-text-body'>
                  Amazon Web Services (AWS) offers a suite of cloud-computing services that make up an on-demand computing platform.
                </span>
              </span>
            </li>

            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='https://varnish-cache.org/' class='material-icons mdl-list__item-avatar varnish'></a>
                <a target='_blank' href='https://varnish-cache.org/'>Varnish</a>
                <span class='mdl-list__item-text-body'>
                  Varnish Cache is a web application accelerator also known as a caching HTTP reverse proxy.
                </span>
              </span>
            </li>

            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='http://ionicframework.com/' class='material-icons mdl-list__item-avatar ionic'></a>
                <a target='_blank' href='http://ionicframework.com/'>Ionic</a>
                <span class='mdl-list__item-text-body'>
                  Easy to build beautiful and interactive mobile apps using HTML5 and AngularJS.
                </span>
              </span>
            </li>

            <li class='mdl-list__item mdl-list__item--three-line'>
              <span class='mdl-list__item-primary-content'>
                <a target='_blank' href='https://developer.android.com/' class='material-icons mdl-list__item-avatar android'></a>
                <a target='_blank' href='https://developer.android.com/'>Android</a>
                <span class='mdl-list__item-text-body'>
                  Android software development is the process by which new applications are created for the Android operating system.
                </span>
              </span>
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
    setCurrentModule(TOOLS)
  )
})

const mapStateToProps = (state, props) => {
  return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(Experience);

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
        'content': 'Kevin Baisas portfolio. Senior Software Engineer. Web Developer.'
      },
      {
        'property': 'og:type',
        'content': 'website'
      },
      {
        'property': 'og:url',
        'content': 'http://www.kevinbaisas.xyz/works'
      },
      {
        'property': 'og:title',
        'content': 'Works'
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
        'href': 'http://www.kevinbaisas.xyz/works'
      }
    ];
  };

  getScript = () :Array<Object> => {
    return [
      {
        'type': 'application/ld+json',
        innerHTML: `{
          '@context': 'http://schema.org',
          '@type': 'Project List',
          'url': 'http://www.kevinbaisas.xyz/works',
          'numberOfItems': '29',
          'itemListElement': [
            {
              '@type': 'Open Source Package',
              'name': 'Redux Isomorphic Boilerplate',
              'url': 'https://github.com/kevinbaisas/redux-isomorphic-template',
              'description': 'An SEO friendly isomorphic biolerplate for Redux.'
            },
            {
              '@type': 'Open Source Package',
              'name': 'OAuth2 Server for Phoenix',
              'url': 'https://github.com/kevinbaisas/oauth2_server',
              'description': 'Simple pluggable Oauth2 Server package for Phoenix Framework.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/yilinker.png',
              'url': 'https://yilinker.com/'
              'name': 'Yilinker Buyers Website',
              'description': 'An e-commerce website that is built on Symfony, Elasticsearch, Redis, MySQL & NodeJS.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/yilinker-seller.png',
              'url': 'https://seller.yilinker.com/'
              'name': 'Yilinker Seller and Affiliate Website',
              'description': 'Seller and Affiliate Website for Yilinker Inc that is built on Symfony, Elasticsearch, Redis, MySQL & NodeJS.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/yilinker-admin.png',
              'name': 'Yilinker Admins Website',
              'description': 'Yilinkers admin website that is built on Symfony, Elasticsearch, Redis, MySQL & NodeJS.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/yilinker-crm.png',
              'name': 'Yilinker CRM',
              'description': 'Yilinkers pluggable CRM platform built on NodeJS & MongoDB.'
            },
            {
              '@type': 'Mobile Application',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/seed.png',
              'url': 'https://play.google.com/store/apps/details?id=com.ionicframework.projectmanager876979',
              'name': 'Seed Project Manager',
              'description': 'A Mobile App that provides real-time services to manage a project.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/str8fly.PNG',
              'name': 'Str8fly',
              'description': 'User and Events Management System.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/cristinamadara.PNG',
              'url': 'http://www.cristinamadara.ca/',
              'name': 'Cristina Madara',
              'description': 'An E-commerce Website and Mobile application with blog connected to Paypal using Paypal’s RESTful API.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/usic.PNG',
              'name': 'US Immigration Connect',
              'description': 'A website that helps the user to be an immigrant of US.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/yellowrock.PNG',
              'name': 'Yellowrock Estate',
              'description': 'A private website with booking system.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/cliq.PNG',
              'url': 'http://www.collegelinkquest.com/',
              'name': 'College Link Quest',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/starfish.PNG',
              'url': 'http://www.starfi.sh/',
              'name': 'Starfish',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/mntc.PNG',
              'url': 'http://www.mntc.com/',
              'name': 'MNTC',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/rtl.PNG',
              'name': 'RTL CBS Asia Entertainment',
              'description': 'Simple CMS website with scheduling system'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/rtl-operator.PNG',
              'name': 'RTL CBS Asia Operators Website',
              'description': 'Simple CMS website with Downloadable files.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/numa.PNG',
              'name': 'Numa',
              'description': 'Simple e-commerce website.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/mida.PNG',
              'url': 'http://www.midafood.com/',
              'name': 'Mida Food',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/dutche.PNG',
              'url': 'http://dutchechocolates.com/',
              'name': 'Dutche Chocolates',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/bizu.PNG',
              'url': 'http://bizupatisserie.com/',
              'name': 'Bizu Patiserrie',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/jaro.PNG',
              'name': 'Jaro Glass Solutions',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/showcase.PNG',
              'name': 'Showcase Models',
              'description': 'Simple e-commerce website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/elysys.PNG',
              'name': 'Elysys',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/bullandbear.PNG',
              'name': 'Bull and Bear',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/mollymalone.PNG',
              'name': 'Molly Malone',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/diamond.PNG',
              'name': '128 Nivel Hills',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/ccga.PNG',
              'name': 'CCGA',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/mfg.PNG',
              'name': 'Mad for Garlic',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/gyukaku.PNG',
              'name': 'Gyukaku',
              'description': 'Simple CMS website'
            }
          ]
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
      <div className='works'>
        <h1 className='black-hat'>Works | Kevin Baisas</h1>
        <AppHelmet
          title='Works'
          meta={ this.getMeta() }
          link={ this.getLink() }
          script={ this.getScript() }
        />
        <div className='works-container'>

          <div className='mdl-grid'>

            <div className='mdl-cell mdl-typography--text-center mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <h2>OPEN SOURCE</h2>
            </div>

            <div className='open-source-container mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <ul className='mdl-list'>
                <li className='mdl-list__item mdl-list__item--two-line'>
                  <span className='mdl-list__item-primary-content'>
                    <a target='_blank' href='https://github.com/kevinbaisas/redux-isomorphic-template' className='material-icons mdl-list__item-avatar'>code</a>
                    <a className='open-source-item' target='_blank' href='https://github.com/kevinbaisas/redux-isomorphic-template'>Redux Isomorphic Boilerplate</a>
                    <span class='mdl-list__item-sub-title'>An SEO friendly isomorphic boilerplate for Redux. </span>
                  </span>
                </li>
                <li className='mdl-list__item mdl-list__item--two-line'>
                  <span className='mdl-list__item-primary-content'>
                    <a target='_blank' href='https://github.com/kevinbaisas/oauth2_server' className='material-icons mdl-list__item-avatar'>code</a>
                    <a className='open-source-item' target='_blank' href='https://github.com/kevinbaisas/oauth2_server'>OAuth2 Server for Phoenix</a>
                    <span class='mdl-list__item-sub-title'>Simple pluggable Oauth2 Server package for Phoenix Framework.</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className='mdl-cell mdl-typography--text-center mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <h2>PROJECTS</h2>
            </div>

            <div className='mdl-cell mdl-cell--8-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <img className='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/yilinker.png' />
            </div>
            <div className='mdl-cell mdl-cell--4-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <h3 className='featured'><a target='_blank' href='https://yilinker.com'>Yilinker Buyer&#39; s Website</a></h3>
              <ul className='featured-description'>
                <li>An e-commerce application with i18n (client & database level).</li>
                <li>Uses Elasticsearch for keyword search.</li>
                <li>Has real-time messaging (buyer - seller) & notifications that uses Redis as a message broker.</li>
                <li>Also have a Restful API that is used by the mobile app.</li>
                <li>GCM & APN is used for mobile notifications & real-time messaging.</li>
              </ul>
              <a className='app-link' target='_blank' href='https://play.google.com/store/apps/details?id=com.yilinker.onlinebuyer'><img src='https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/playstore.png' /></a>
              <a className='app-link' target='_blank' href='https://d39ndui1cok09h.cloudfront.net/assets/files/onlinebuyer_latest.apk'><img src='https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/direct.png' /></a>
              <a className='app-link' target='_blank' href='https://itunes.apple.com/us/app/yilinker-buyer/id1048641709?mt=8'><img src='https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/appstore.png' /></a>
            </div>

            <div className='mdl-cell mdl-cell--4-col-desktop mdl-cell--hide-tablet mdl-cell--hide-phone'>
              <h3 className='featured'><a target='_blank' href='https://seller.yilinker.com'>Yilinker Seller/Affiliate&#39; s Website</a></h3>
              <ul className='featured-description'>
                <li>An application with i18n (client & database level).</li>
                <li>Connected to the logistics system for inventory tracking.</li>
                <li>Uses Elasticsearch for keyword search & products indexing.</li>
                <li>Has real-time messaging (buyer - seller) & notifications that uses Redis as a message broker.</li>
                <li>Also have a Restful API that is used by the mobile app.</li>
                <li>GCM & APN is used for mobile notifications & real-time messaging.</li>
                <li>There are two user types in this platform (Seller & Affiliate) and each user type has its own priviledges on each module.</li>
              </ul>
              <a className='app-link' target='_blank' href='https://play.google.com/store/apps/details?id=com.yilinker.onlineseller'><img src='https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/playstore.png' /></a>
              <a className='app-link' target='_blank' href='https://itunes.apple.com/us/app/yilinker-buyer/id1048641709?mt=8'><img src='https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/appstore.png' /></a>
            </div>
            <div className='mdl-cell mdl-cell--8-col-desktop mdl-cell--hide-tablet mdl-cell--hide-phone'>
              <img className='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/yilinker-seller.png' />
            </div>

            <div className='mdl-cell mdl-cell--hide-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <img className='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/yilinker-seller.png' />
            </div>
            <div className='mdl-cell mdl-cell--hide-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <h3 className='featured'><a target='_blank' href='https://seller.yilinker.com/'>Yilinker Seller/Affiliate&#39; s Website</a></h3>
              <ul className='featured-description'>
                <li>An application with i18n (client & database level).</li>
                <li>Connected to the logistics system for inventory tracking.</li>
                <li>Uses Elasticsearch for keyword search & products indexing.</li>
                <li>Has real-time messaging (buyer - seller) & notifications that uses Redis as a message broker.</li>
                <li>Also have a Restful API that is used by the mobile app.</li>
                <li>GCM & APN is used for mobile notifications & real-time messaging.</li>
                <li>There are two user types in this platform (Seller & Affiliate) and each user type has its own priviledges on each module.</li>
              </ul>
              <a className='app-link' target='_blank' href='https://play.google.com/store/apps/details?id=com.yilinker.onlineseller'><img src='https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/playstore.png' /></a>
              <a className='app-link' target='_blank' href='https://itunes.apple.com/us/app/yilinker-seller/id1055960515?mt=8'><img src='https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/appstore.png' /></a>
            </div>

            <div className='mdl-cell mdl-cell--8-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <img className='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/yilinker-admin.png' />
            </div>
            <div className='mdl-cell mdl-cell--4-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <h3 className='featured'><a>Yilinker Admin&#39; s Website</a></h3>
              <ul className='featured-description'>
                <li>Has 8 user types in the platform and each user type has its own priviledges on each module.</li>
                <li>Continous data syncing with the logistics & trading platforms.</li>
                <li>Also used elasticsearch for keyword searches.</li>
              </ul>
            </div>

            <div className='mdl-cell mdl-cell--4-col-desktop mdl-cell--hide-tablet mdl-cell--hide-phone'>
              <h3 className='featured'><a>Yilinker CRM</a></h3>
              <ul className='featured-description'>
                <li>Real-time CRM application built in NodeJS Express Framework, MongoDB & AngularJS.</li>
                <li>Used as a buyer-to-admin chat system in Yilinker&#39; s website.</li>
                <li>Pluggable to any system as long as there is an Oauth2</li>
                <li>Has 3 user types (Public, CSR Agent & CSR Manager)</li>
                <li>Able to export a conversation into an CSV format</li>
              </ul>
            </div>
            <div className='mdl-cell mdl-cell--8-col-desktop mdl-cell--hide-tablet mdl-cell--hide-phone'>
              <img className='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/yilinker-crm.png' />
            </div>

            <div className='mdl-cell mdl-cell--hide-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <img className='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/yilinker-crm.png' />
            </div>
            <div className='mdl-cell mdl-cell--hide-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <h3 className='featured'><a>Yilinker CRM</a></h3>
              <ul className='featured-description'>
                <li>Real-time CRM application built in NodeJS Express Framework, MongoDB & AngularJS.</li>
                <li>Used as a buyer-to-admin chat system in Yilinker&#39; s website.</li>
                <li>Pluggable to any system as long as there is an Oauth2</li>
                <li>Has 3 user types (Public, CSR Agent & CSR Manager)</li>
                <li>Able to export a conversation into an CSV format</li>
              </ul>
            </div>

            <div className='mdl-cell mdl-cell--8-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <img className='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/seed.png' />
            </div>
            <div className='mdl-cell mdl-cell--4-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <h3 className='featured'><a target='_blank' href='https://play.google.com/store/apps/details?id=com.ionicframework.projectmanager876979'>Seed Project Manager</a></h3>
              <ul className='featured-description'>
                <li>Built on using Ionic Framework with Firebase.</li>
                <li>A Mobile App that provides real-time services to manage a project.</li>
                <li>User can add other users as connections or add as member of his/her project.</li>
                <li>Users can chat with other users in real time.</li>
                <li>Each project has milestone and task boards to track the progress of the project.</li>
                <li>Projects have allotted budget and budget graph to track the remaining and used hours of the project.</li>
              </ul>
              <a className='app-link' target='_blank' href='https://play.google.com/store/apps/details?id=com.ionicframework.projectmanager876979'><img src='https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/playstore.png' /></a>
            </div>

            <div className='mdl-cell mdl-cell--4-col-desktop mdl-cell--hide-tablet mdl-cell--hide-phone'>
              <h3 className='featured'><a>Str8fly</a></h3>
              <ul className='featured-description'>
                <li>User and Events Management System</li>
                <li>There are four types of users (Models, Clients, Agents and the Admin).</li>
                <li>Users should be accepted by the admin before they can log in to their account.</li>
                <li>Admin and Clients has the authority to create an event.</li>
                <li>Clients and agents can invite models to join to their events.</li>
                <li>Model can send a request or approve event invitations.</li>
                <li>Events publicity on a model depends on models Sex, City, State and Primary Language.</li>
              </ul>
            </div>
            <div className='mdl-cell mdl-cell--8-col-desktop mdl-cell--hide-tablet mdl-cell--hide-phone'>
              <img className='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/str8fly.PNG' />
            </div>

            <div className='mdl-cell mdl-cell--hide-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <img className='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/str8fly.PNG' />
            </div>
            <div className='mdl-cell mdl-cell--hide-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <h3 className='featured'><a>Str8fly</a></h3>
              <ul className='featured-description'>
                <li>User and Events Management System</li>
                <li>There are four types of users (Models, Clients, Agents and the Admin).</li>
                <li>Users should be accepted by the admin before they can log in to their account.</li>
                <li>Admin and Clients has the authority to create an event.</li>
                <li>Clients and agents can invite models to join to their events.</li>
                <li>Model can send a request or approve event invitations.</li>
                <li>Events publicity on a model depends on models Sex, City, State and Primary Language.</li>
              </ul>
            </div>

            <div className='mdl-cell mdl-cell--8-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <img className='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/cristinamadara.PNG' />
            </div>
            <div className='mdl-cell mdl-cell--4-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <h3 className='featured'><a target='_blank' href='http://www.cristinamadara.ca/'>Cristina Madara</a></h3>
              <ul className='featured-description'>
                <li>An E-commerce Website with blog connected to Paypal using Paypal’s RESTful API.</li>
                <li>The sample mobile app was built using native Android Framework</li>
              </ul>
              <a className='app-link' target='_blank' href='https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/CristinaMadara.apk'><img src='https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/direct.png' /></a>
            </div>

            <div className='mdl-cell mdl-cell--4-col-desktop mdl-cell--hide-tablet mdl-cell--hide-phone'>
              <h3 className='featured'><a>USIC</a></h3>
              <ul className='featured-description'>
                <li>A website that helps the user to be an immigrant of US.</li>
                <li>Connected to Paypal.</li>
                <li>Each application have forms and each forms are correlated to each other.</li>
                <li>Has eligibility test to give information if the user is qualified for a certain application.</li>
              </ul>
            </div>
            <div className='mdl-cell mdl-cell--8-col-desktop mdl-cell--hide-tablet mdl-cell--hide-phone'>
              <img className='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/usic.PNG' />
            </div>

            <div className='mdl-cell mdl-cell--hide-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <img className='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/usic.PNG' />
            </div>
            <div className='mdl-cell mdl-cell--hide-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <h3 className='featured'><a>USIC</a></h3>
              <ul className='featured-description'>
                <li>A website that helps the user to be an immigrant of US.</li>
                <li>Connected to Paypal.</li>
                <li>Each application have forms and each forms are correlated to each other.</li>
                <li>Has eligibility test to give information if the user is qualified for a certain application.</li>
              </ul>
            </div>

            <div className='mdl-cell mdl-cell--8-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <img className='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kev-portfolio/works/yellowrock.PNG' />
            </div>
            <div className='mdl-cell mdl-cell--4-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <h3 className='featured'><a>Yellow Rock Estate</a></h3>
              <ul className='featured-description'>
                <li>A private website with booking system.</li>
                <li>The user can request the day they want to book.</li>
                <li>Request should be approved first by admin.</li>
                <li>After the request has been approved, the customer should pay to Paypal.</li>
              </ul>
            </div>

            <div className='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <a target='_blank' href='http://collegelinkquest.com/'>
                <div className='cliq mdl-card mdl-shadow--2dp'></div>
              </a>
              <h3 className='others'><a target='_blank' href='http://collegelinkquest.com/'>CLIQ</a></h3>
            </div>

            <div className='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <a target='_blank' href='http://www.starfi.sh/'>
                <div className='starfish mdl-card mdl-shadow--2dp'></div>
              </a>
              <h3 className='others'><a target='_blank' href='http://www.starfi.sh/'>Starfish</a></h3>
            </div>

            <div className='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <a target='_blank' href='http://www.mntc.com/'>
                <div className='mntc mdl-card mdl-shadow--2dp'></div>
              </a>
              <h3 className='others'><a target='_blank' href='http://www.mntc.com/'>MNTC</a></h3>
            </div>

            <div className='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <div className='rtl mdl-card mdl-shadow--2dp'></div>
              <h3 className='others'>RTL CBS Asia Entertainment</h3>
            </div>

            <div className='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <div className='rtl-operator mdl-card mdl-shadow--2dp'></div>
              <h3 className='others'>RTL CBS Asia Operators Website</h3>
            </div>

            <div className='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <div className='numa mdl-card mdl-shadow--2dp'></div>
              <h3 className='others'>Numa</h3>
            </div>

            <div className='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <a target='_blank' href='http://www.midafood.com/'>
                <div className='mida mdl-card mdl-shadow--2dp'></div>
              </a>
              <h3 className='others'><a target='_blank' href='http://www.midafood.com/'>Mida Food</a></h3>
            </div>

            <div className='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <a target='_blank' href='http://dutchechocolates.com/'>
                <div className='dutche mdl-card mdl-shadow--2dp'></div>
              </a>
              <h3 className='others'><a target='_blank' href='http://dutchechocolates.com/'>Dutche Chocolates</a></h3>
            </div>

            <div className='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <a target='_blank' href='http://bizupatisserie.com/'>
                <div className='bizu mdl-card mdl-shadow--2dp'></div>
              </a>
              <h3 className='others'><a target='_blank' href='http://bizupatisserie.com/'>Bizu Patisserie</a></h3>
            </div>

            <div className='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <div className='jaro mdl-card mdl-shadow--2dp'></div>
              <h3 className='others'>Jaro Glass Solutions</h3>
            </div>

            <div className='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <div className='showcase mdl-card mdl-shadow--2dp'></div>
              <h3 className='others'>Showcase Models</h3>
            </div>

            <div className='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <div className='elysys mdl-card mdl-shadow--2dp'></div>
              <h3 className='others'>Elysys</h3>
            </div>

            <div className='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <div className='bull-and-bear mdl-card mdl-shadow--2dp'></div>
              <h3 className='others'>Bull and Bear</h3>
            </div>

            <div className='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <div className='molly-malone mdl-card mdl-shadow--2dp'></div>
              <h3 className='others'>Molly Malone</h3>
            </div>

            <div className='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <div className='diamond mdl-card mdl-shadow--2dp'></div>
              <h3 className='others'>128 Nivel Hills</h3>
            </div>

            <div className='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <div className='ccga mdl-card mdl-shadow--2dp'></div>
              <h3 className='others'>CCGA</h3>
            </div>

            <div className='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <div className='mfg mdl-card mdl-shadow--2dp'></div>
              <h3 className='others'>Mad for Garlic</h3>
            </div>

            <div className='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <div className='gyukaku mdl-card mdl-shadow--2dp'></div>
              <h3 className='others'>Gyukaku</h3>
            </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Works);

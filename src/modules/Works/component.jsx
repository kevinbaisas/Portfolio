
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import PropTypes            from 'prop-types';
import { setCurrentModule } from '../../actions';
import { WORKS }            from '../../constants';
import AppHelmet            from '../AppHelmet/component';

class Works extends Component {

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
        'content': 'http://kevinbaisas.com/works'
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

  getLink() {
    return [
      {
        'rel': 'canonical',
        'href': 'http://kevinbaisas.com/works'
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
          'url': 'http://kevinbaisas.com/works',
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
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/yilinker.png',
              'url': 'http://buyer.yilinker.cn/'
              'name': 'Yilinker Buyers Website',
              'description': 'An e-commerce website that is built on Symfony, Elasticsearch, Redis, MySQL & NodeJS.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/yilinker-seller.png',
              'url': 'http://seller.yilinker.cn/'
              'name': 'Yilinker Seller and Affiliate Website',
              'description': 'Seller and Affiliate Website for Yilinker Inc that is built on Symfony, Elasticsearch, Redis, MySQL & NodeJS.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/yilinker-admin.png',
              'name': 'Yilinker Admins Website',
              'description': 'Yilinkers admin website that is built on Symfony, Elasticsearch, Redis, MySQL & NodeJS.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/yilinker-crm.png',
              'name': 'Yilinker CRM',
              'description': 'Yilinkers pluggable CRM platform built on NodeJS & MongoDB.'
            },
            {
              '@type': 'Mobile Application',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/seed.png',
              'url': 'https://play.google.com/store/apps/details?id=com.ionicframework.projectmanager876979',
              'name': 'Seed Project Manager',
              'description': 'A Mobile App that provides real-time services to manage a project.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/str8fly.PNG',
              'name': 'Str8fly',
              'description': 'User and Events Management System.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/cristinamadara.PNG',
              'url': 'http://www.cristinamadara.ca/',
              'name': 'Cristina Madara',
              'description': 'An E-commerce Website and Mobile application with blog connected to Paypal using Paypal’s RESTful API.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/usic.PNG',
              'name': 'US Immigration Connect',
              'description': 'A website that helps the user to be an immigrant of US.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/yellowrock.PNG',
              'name': 'Yellowrock Estate',
              'description': 'A private website with booking system.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/cliq.PNG',
              'url': 'http://www.collegelinkquest.com/',
              'name': 'College Link Quest',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/starfish.PNG',
              'url': 'http://www.starfi.sh/',
              'name': 'Starfish',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/mntc.PNG',
              'url': 'http://www.mntc.com/',
              'name': 'MNTC',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/rtl.PNG',
              'name': 'RTL CBS Asia Entertainment',
              'description': 'Simple CMS website with scheduling system'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/rtl-operator.PNG',
              'name': 'RTL CBS Asia Operators Website',
              'description': 'Simple CMS website with Downloadable files.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/numa.PNG',
              'name': 'Numa',
              'description': 'Simple e-commerce website.'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/mida.PNG',
              'url': 'http://www.midafood.com/',
              'name': 'Mida Food',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/dutche.PNG',
              'url': 'http://dutchechocolates.com/',
              'name': 'Dutche Chocolates',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/bizu.PNG',
              'url': 'http://bizupatisserie.com/',
              'name': 'Bizu Patiserrie',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/jaro.PNG',
              'name': 'Jaro Glass Solutions',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/showcase.PNG',
              'name': 'Showcase Models',
              'description': 'Simple e-commerce website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/elysys.PNG',
              'name': 'Elysys',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/bullandbear.PNG',
              'name': 'Bull and Bear',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/mollymalone.PNG',
              'name': 'Molly Malone',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/diamond.PNG',
              'name': '128 Nivel Hills',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/ccga.PNG',
              'name': 'CCGA',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/mfg.PNG',
              'name': 'Mad for Garlic',
              'description': 'Simple CMS website'
            },
            {
              '@type': 'Website',
              'image': 'https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/gyukaku.PNG',
              'name': 'Gyukaku',
              'description': 'Simple CMS website'
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
    { action: setCurrentModule, params: [WORKS] }
  ];

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.setCurrentModule();
  }

  render() {
    return (
      <div class='works'>
        <h1 class='black-hat'>Works | Kevin Baisas</h1>
        <AppHelmet title='Works | Kevin Baisas' meta={ this.getMeta() } link={ this.getLink() } script={ this.getScript() } />
        <div class='works-container'>
          <div class='mdl-grid'>
            <div class='mdl-cell mdl-typography--text-center mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <h2>OPEN SOURCE</h2>
            </div>

            <div class='open-source-container mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <ul class='mdl-list'>
                <li class='mdl-list__item mdl-list__item--two-line'>
                  <span class='mdl-list__item-primary-content'>
                    <a target='_blank' href='https://github.com/kvnbai/redux-isomorphic-spa-boilerplate' class='material-icons mdl-list__item-avatar'>code</a>
                    <a class='open-source-item' target='_blank' href='https://github.com/kvnbai/redux-isomorphic-spa-boilerplate'>Redux Isomorphic Boilerplate</a>
                    <span class='mdl-list__item-sub-title'>An SEO friendly isomorphic boilerplate for Redux. </span>
                  </span>
                </li>
                <li class='mdl-list__item mdl-list__item--two-line'>
                  <span class='mdl-list__item-primary-content'>
                    <a target='_blank' href='https://github.com/kvnbai/oauth2_server' class='material-icons mdl-list__item-avatar'>code</a>
                    <a class='open-source-item' target='_blank' href='https://github.com/kvnbai/oauth2_server'>OAuth2 Server for Phoenix</a>
                    <span class='mdl-list__item-sub-title'>Simple pluggable Oauth2 Server package for Phoenix Framework.</span>
                  </span>
                </li>
              </ul>
            </div>

            <div class='mdl-cell mdl-typography--text-center mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <h2>PROJECTS</h2>
            </div>

            <div class='mdl-cell mdl-cell--8-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <img class='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/yilinker.png' />
            </div>
            <div class='mdl-cell mdl-cell--4-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <h3 class='featured'><a target='_blank' href='http://buyer.yilinker.cn/'>Yilinker Buyer&#39; s Website</a></h3>
              <ul class='featured-description'>
                <li>An e-commerce application with i18n (client & database level).</li>
                <li>Uses Elasticsearch for keyword search.</li>
                <li>Has real-time messaging (buyer - seller) & notifications that uses Redis as a message broker.</li>
                <li>Also have a Restful API that is used by the mobile app.</li>
                <li>GCM & APN is used for mobile notifications & real-time messaging.</li>
              </ul>
              <a class='app-link' target='_blank' href='https://play.google.com/store/apps/details?id=com.yilinker.onlinebuyer'><img src='https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/playstore.png' /></a>
              <a class='app-link' target='_blank' href='https://d39ndui1cok09h.cloudfront.net/assets/files/onlinebuyer_latest.apk'><img src='https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/direct.png' /></a>
              <a class='app-link' target='_blank' href='https://itunes.apple.com/us/app/yilinker-buyer/id1048641709?mt=8'><img src='https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/appstore.png' /></a>
            </div>

            <div class='mdl-cell mdl-cell--4-col-desktop mdl-cell--hide-tablet mdl-cell--hide-phone'>
              <h3 class='featured'><a target='_blank' href='http://seller.yilinker.cn'>Yilinker Seller/Affiliate&#39; s Website</a></h3>
              <ul class='featured-description'>
                <li>An application with i18n (client & database level).</li>
                <li>Connected to the logistics system for inventory tracking.</li>
                <li>Uses Elasticsearch for keyword search & products indexing.</li>
                <li>Has real-time messaging (buyer - seller) & notifications that uses Redis as a message broker.</li>
                <li>Also have a Restful API that is used by the mobile app.</li>
                <li>GCM & APN is used for mobile notifications & real-time messaging.</li>
                <li>There are two user types in this platform (Seller & Affiliate) and each user type has its own priviledges on each module.</li>
              </ul>
              <a class='app-link' target='_blank' href='https://play.google.com/store/apps/details?id=com.yilinker.onlineseller'><img src='https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/playstore.png' /></a>
              <a class='app-link' target='_blank' href='https://itunes.apple.com/us/app/yilinker-buyer/id1048641709?mt=8'><img src='https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/appstore.png' /></a>
            </div>
            <div class='mdl-cell mdl-cell--8-col-desktop mdl-cell--hide-tablet mdl-cell--hide-phone'>
              <img class='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/yilinker-seller.png' />
            </div>

            <div class='mdl-cell mdl-cell--hide-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <img class='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/yilinker-seller.png' />
            </div>
            <div class='mdl-cell mdl-cell--hide-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <h3 class='featured'><a target='_blank' href='http://seller.yilinker.cn/'>Yilinker Seller/Affiliate&#39; s Website</a></h3>
              <ul class='featured-description'>
                <li>An application with i18n (client & database level).</li>
                <li>Connected to the logistics system for inventory tracking.</li>
                <li>Uses Elasticsearch for keyword search & products indexing.</li>
                <li>Has real-time messaging (buyer - seller) & notifications that uses Redis as a message broker.</li>
                <li>Also have a Restful API that is used by the mobile app.</li>
                <li>GCM & APN is used for mobile notifications & real-time messaging.</li>
                <li>There are two user types in this platform (Seller & Affiliate) and each user type has its own priviledges on each module.</li>
              </ul>
              <a class='app-link' target='_blank' href='https://play.google.com/store/apps/details?id=com.yilinker.onlineseller'><img src='https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/playstore.png' /></a>
              <a class='app-link' target='_blank' href='https://itunes.apple.com/us/app/yilinker-seller/id1055960515?mt=8'><img src='https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/appstore.png' /></a>
            </div>

            <div class='mdl-cell mdl-cell--8-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <img class='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/yilinker-admin.png' />
            </div>
            <div class='mdl-cell mdl-cell--4-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <h3 class='featured'><a>Yilinker Admin&#39; s Website</a></h3>
              <ul class='featured-description'>
                <li>Has 8 user types in the platform and each user type has its own priviledges on each module.</li>
                <li>Continous data syncing with the logistics & trading platforms.</li>
                <li>Also used elasticsearch for keyword searches.</li>
              </ul>
            </div>

            <div class='mdl-cell mdl-cell--4-col-desktop mdl-cell--hide-tablet mdl-cell--hide-phone'>
              <h3 class='featured'><a>Yilinker CRM</a></h3>
              <ul class='featured-description'>
                <li>Real-time CRM application built in NodeJS Express Framework, MongoDB & AngularJS.</li>
                <li>Used as a buyer-to-admin chat system in Yilinker&#39; s website.</li>
                <li>Pluggable to any system as long as there is an Oauth2</li>
                <li>Has 3 user types (Public, CSR Agent & CSR Manager)</li>
                <li>Able to export a conversation into an CSV format</li>
              </ul>
            </div>
            <div class='mdl-cell mdl-cell--8-col-desktop mdl-cell--hide-tablet mdl-cell--hide-phone'>
              <img class='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/yilinker-crm.png' />
            </div>

            <div class='mdl-cell mdl-cell--hide-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <img class='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/yilinker-crm.png' />
            </div>
            <div class='mdl-cell mdl-cell--hide-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <h3 class='featured'><a>Yilinker CRM</a></h3>
              <ul class='featured-description'>
                <li>Real-time CRM application built in NodeJS Express Framework, MongoDB & AngularJS.</li>
                <li>Used as a buyer-to-admin chat system in Yilinker&#39; s website.</li>
                <li>Pluggable to any system as long as there is an Oauth2</li>
                <li>Has 3 user types (Public, CSR Agent & CSR Manager)</li>
                <li>Able to export a conversation into an CSV format</li>
              </ul>
            </div>

            <div class='mdl-cell mdl-cell--8-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <img class='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/seed.png' />
            </div>
            <div class='mdl-cell mdl-cell--4-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <h3 class='featured'><a target='_blank' href='https://play.google.com/store/apps/details?id=com.ionicframework.projectmanager876979'>Seed Project Manager</a></h3>
              <ul class='featured-description'>
                <li>Built on using Ionic Framework with Firebase.</li>
                <li>A Mobile App that provides real-time services to manage a project.</li>
                <li>User can add other users as connections or add as member of his/her project.</li>
                <li>Users can chat with other users in real time.</li>
                <li>Each project has milestone and task boards to track the progress of the project.</li>
                <li>Projects have allotted budget and budget graph to track the remaining and used hours of the project.</li>
              </ul>
              <a class='app-link' target='_blank' href='https://play.google.com/store/apps/details?id=com.ionicframework.projectmanager876979'><img src='https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/playstore.png' /></a>
            </div>

            <div class='mdl-cell mdl-cell--4-col-desktop mdl-cell--hide-tablet mdl-cell--hide-phone'>
              <h3 class='featured'><a>Str8fly</a></h3>
              <ul class='featured-description'>
                <li>User and Events Management System</li>
                <li>There are four types of users (Models, Clients, Agents and the Admin).</li>
                <li>Users should be accepted by the admin before they can log in to their account.</li>
                <li>Admin and Clients has the authority to create an event.</li>
                <li>Clients and agents can invite models to join to their events.</li>
                <li>Model can send a request or approve event invitations.</li>
                <li>Events publicity on a model depends on models Sex, City, State and Primary Language.</li>
              </ul>
            </div>
            <div class='mdl-cell mdl-cell--8-col-desktop mdl-cell--hide-tablet mdl-cell--hide-phone'>
              <img class='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/str8fly.PNG' />
            </div>

            <div class='mdl-cell mdl-cell--hide-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <img class='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/str8fly.PNG' />
            </div>
            <div class='mdl-cell mdl-cell--hide-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <h3 class='featured'><a>Str8fly</a></h3>
              <ul class='featured-description'>
                <li>User and Events Management System</li>
                <li>There are four types of users (Models, Clients, Agents and the Admin).</li>
                <li>Users should be accepted by the admin before they can log in to their account.</li>
                <li>Admin and Clients has the authority to create an event.</li>
                <li>Clients and agents can invite models to join to their events.</li>
                <li>Model can send a request or approve event invitations.</li>
                <li>Events publicity on a model depends on models Sex, City, State and Primary Language.</li>
              </ul>
            </div>

            <div class='mdl-cell mdl-cell--8-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <img class='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/cristinamadara.PNG' />
            </div>
            <div class='mdl-cell mdl-cell--4-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <h3 class='featured'><a target='_blank' href='http://www.cristinamadara.ca/'>Cristina Madara</a></h3>
              <ul class='featured-description'>
                <li>An E-commerce Website with blog connected to Paypal using Paypal’s RESTful API.</li>
                <li>The sample mobile app was built using native Android Framework</li>
              </ul>
              <a class='app-link' target='_blank' href='https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/CristinaMadara.apk'><img src='https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/direct.png' /></a>
            </div>

            <div class='mdl-cell mdl-cell--4-col-desktop mdl-cell--hide-tablet mdl-cell--hide-phone'>
              <h3 class='featured'><a>USIC</a></h3>
              <ul class='featured-description'>
                <li>A website that helps the user to be an immigrant of US.</li>
                <li>Connected to Paypal.</li>
                <li>Each application have forms and each forms are correlated to each other.</li>
                <li>Has eligibility test to give information if the user is qualified for a certain application.</li>
              </ul>
            </div>
            <div class='mdl-cell mdl-cell--8-col-desktop mdl-cell--hide-tablet mdl-cell--hide-phone'>
              <img class='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/usic.PNG' />
            </div>

            <div class='mdl-cell mdl-cell--hide-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <img class='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/usic.PNG' />
            </div>
            <div class='mdl-cell mdl-cell--hide-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <h3 class='featured'><a>USIC</a></h3>
              <ul class='featured-description'>
                <li>A website that helps the user to be an immigrant of US.</li>
                <li>Connected to Paypal.</li>
                <li>Each application have forms and each forms are correlated to each other.</li>
                <li>Has eligibility test to give information if the user is qualified for a certain application.</li>
              </ul>
            </div>

            <div class='mdl-cell mdl-cell--8-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <img class='work-item' src='https://s3-ap-southeast-1.amazonaws.com/kevinbaisas-portfolio/images/yellowrock.PNG' />
            </div>
            <div class='mdl-cell mdl-cell--4-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone'>
              <h3 class='featured'><a>Yellow Rock Estate</a></h3>
              <ul class='featured-description'>
                <li>A private website with booking system.</li>
                <li>The user can request the day they want to book.</li>
                <li>Request should be approved first by admin.</li>
                <li>After the request has been approved, the customer should pay to Paypal.</li>
              </ul>
            </div>

            <div class='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <a target='_blank' href='http://collegelinkquest.com/'>
                <div class='cliq mdl-card mdl-shadow--2dp'></div>
              </a>
              <h3 class='others'><a target='_blank' href='http://collegelinkquest.com/'>CLIQ</a></h3>
            </div>

            <div class='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <a target='_blank' href='http://www.starfi.sh/'>
                <div class='starfish mdl-card mdl-shadow--2dp'></div>
              </a>
              <h3 class='others'><a target='_blank' href='http://www.starfi.sh/'>Starfish</a></h3>
            </div>

            <div class='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <a target='_blank' href='http://www.mntc.com/'>
                <div class='mntc mdl-card mdl-shadow--2dp'></div>
              </a>
              <h3 class='others'><a target='_blank' href='http://www.mntc.com/'>MNTC</a></h3>
            </div>

            <div class='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <div class='rtl mdl-card mdl-shadow--2dp'></div>
              <h3 class='others'>RTL CBS Asia Entertainment</h3>
            </div>

            <div class='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <div class='rtl-operator mdl-card mdl-shadow--2dp'></div>
              <h3 class='others'>RTL CBS Asia Operators Website</h3>
            </div>

            <div class='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <div class='numa mdl-card mdl-shadow--2dp'></div>
              <h3 class='others'>Numa</h3>
            </div>

            <div class='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <a target='_blank' href='http://www.midafood.com/'>
                <div class='mida mdl-card mdl-shadow--2dp'></div>
              </a>
              <h3 class='others'><a target='_blank' href='http://www.midafood.com/'>Mida Food</a></h3>
            </div>

            <div class='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <a target='_blank' href='http://dutchechocolates.com/'>
                <div class='dutche mdl-card mdl-shadow--2dp'></div>
              </a>
              <h3 class='others'><a target='_blank' href='http://dutchechocolates.com/'>Dutche Chocolates</a></h3>
            </div>

            <div class='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <a target='_blank' href='http://bizupatisserie.com/'>
                <div class='bizu mdl-card mdl-shadow--2dp'></div>
              </a>
              <h3 class='others'><a target='_blank' href='http://bizupatisserie.com/'>Bizu Patisserie</a></h3>
            </div>

            <div class='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <div class='jaro mdl-card mdl-shadow--2dp'></div>
              <h3 class='others'>Jaro Glass Solutions</h3>
            </div>

            <div class='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <div class='showcase mdl-card mdl-shadow--2dp'></div>
              <h3 class='others'>Showcase Models</h3>
            </div>

            <div class='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <div class='elysys mdl-card mdl-shadow--2dp'></div>
              <h3 class='others'>Elysys</h3>
            </div>

            <div class='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <div class='bull-and-bear mdl-card mdl-shadow--2dp'></div>
              <h3 class='others'>Bull and Bear</h3>
            </div>

            <div class='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <div class='molly-malone mdl-card mdl-shadow--2dp'></div>
              <h3 class='others'>Molly Malone</h3>
            </div>

            <div class='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <div class='diamond mdl-card mdl-shadow--2dp'></div>
              <h3 class='others'>128 Nivel Hills</h3>
            </div>

            <div class='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <div class='ccga mdl-card mdl-shadow--2dp'></div>
              <h3 class='others'>CCGA</h3>
            </div>

            <div class='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <div class='mfg mdl-card mdl-shadow--2dp'></div>
              <h3 class='others'>Mad for Garlic</h3>
            </div>

            <div class='mdl-cell mdl-typography--text-center mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone'>
              <div class='gyukaku mdl-card mdl-shadow--2dp'></div>
              <h3 class='others'>Gyukaku</h3>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

Works.propTypes = {
  setCurrentModule: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  setCurrentModule: () => dispatch(
    setCurrentModule(WORKS)
  )
})

const mapStateToProps = (state, props) => {
  return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(Works);


import React, { Component } from 'react';
import PropTypes            from 'prop-types';

export default class Footer extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <footer className='mdl-mini-footer'>
        <div className='mdl-mini-footer__left-section'>
          <span>kevin.baisas@gmail.com</span>
        </div>
      </footer>
    );
  }
};

Footer.propTypes = {
}

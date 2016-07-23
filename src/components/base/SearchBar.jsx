/** @flow */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const SearchBar = class SearchBar extends Component {

  props: Object;

  searchInput: string = '';

  search: Function = () :void => {
    const { dispatch, onSearchAction } : {
      dispatch: Function,
      onSearchAction: Function
    } = this.props;

    onSearchAction(this.searchInput);
    // dispatch(onSearchAction(this.searchInput));
  };

  handleTextChange: Function = (e: Object) :void => {
    const ENTER = 13;
    if(e.keyCode == 13) {
      this.search(e.target.value);
    }
  };

  constructor() :void {
    super();
    this.search = this.search.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  render() :Object {
    const { id }: { id: string } = this.props;
    return (
      <div className='mdl-textfield mdl-js-textfield mdl-textfield--expandable
        mdl-textfield--floating-label mdl-textfield--align-right mdl-textfield--full-width'>
        <label className='mdl-button mdl-js-button mdl-button--icon' for={ id }>
          <i className='material-icons'>search</i>
        </label>
        <div className='mdl-textfield__expandable-holder'>
          <input className='mdl-textfield__input' type='text' id={ id } onKeyUp={ this.handleTextChange } />
        </div>
      </div>
    );
  }
};

SearchBar.propTypes = {
  onSearchAction: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch: Function) :Object => {
  return { dispatch };
};

const mapStateToProps = (state: Object, props: Object) :Object => {
  const { onSearchAction, id }: { onSearchAction: Function, id: string } = props;
  return { onSearchAction, id };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

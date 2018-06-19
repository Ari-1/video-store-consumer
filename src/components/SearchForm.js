import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SearchForm extends Component {
  static propTypes = {
    resultCallback: PropTypes.func
  };

  constructor() {
    super();
    this.state = {
      title: ''
    };
  }

  onInput = (event) => {
    let updatedList = {};
    updatedList[event.target.name] = event.target.value
    this.setState(updatedList)
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.resultCallback(this.state);

    this.setState({
      title: ''
    })
  }

  render() {

    return (
      <form className="form" onSubmit={this.onFormSubmit}>

        <div>
          <label htmlFor="title">Search </label>
          <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.onInput}/>
        </div>

        <div>
          <input
          type="submit"/>
        </div>
      </form>
    );
  }
}

export default SearchForm;

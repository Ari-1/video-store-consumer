import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomerData extends Component {

  render() {

    return (
      <section>
        <h3>{this.props.name}</h3>
        <p>{this.props.movies_count}</p>
      </section>
    )
  }
}

CustomerData.propTypes = {
  name: PropTypes.string,
  movies_count: PropTypes.number,
};

export default CustomerData;

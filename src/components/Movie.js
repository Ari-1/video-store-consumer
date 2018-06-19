import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {

  render() {

    return (
      <section>
      <div>
        <h1>
          { this.props.title }
        </h1>

        <img
          src={this.props.image} alt={this.props.title}
        />
      </div>
      </section>
    );
  }
}

Movie.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default Movie;

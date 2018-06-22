import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Library.css';
import Movie from './Movie';

const BASE_URL = "http://localhost:3000/movies"

class Library extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    this.props.updateStatusCallback('Loading...', 'success');

    axios.get(BASE_URL)
    .then((response) => {
      this.props.updateStatusCallback(`Successfully loaded ${response.data.length} movies!`, 'success');
      const movies = response.data;
      this.setState({ movies: movies });
    })
    .catch((error) => {
      this.props.updateStatusCallback(error.message, 'error');
    });
  }

  rentalForMovie = (movie) => {
    this.props.getMovieCallback(movie);
  }


  render() {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie key={index}
      id={movie.id}
      title={movie.title}
      image={movie.image_url}
      rentalMovieCallback={this.rentalForMovie}
      />
    });


    return (
      <section id="list">
        <div>{movies}</div>
      </section>
    );
  }

}

Library.propTypes = {
  getMovieCallback: PropTypes.func,
  updateStatusCallback: PropTypes.func
}

export default Library;

import React, { Component } from 'react';
import axios from 'axios';

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
    // this.props.updateStatusCallback('Loading...', 'success');

    axios.get(BASE_URL)
    .then((response) => {
      // this.props.updateStatusCallback('Successfully loaded all movies!', 'success');
      const movies = response.data;
      this.setState({ movies: movies });
    })
    .catch((error) => {
      console.log('Error :(');
      console.log(error);
      // this.props.updateStatusCallback(error.message, 'error');
    });
  }

  addMovie = (query) => {
    console.log(query)
    axios.post(BASE_URL, query)
      .then((response) => {
        let updatedList = this.state.movies;
        updatedList.push(response.data);
        this.setState({movies: updatedList});
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {

    const movies = this.state.movies.map((movie, index) => {
      return <Movie key={index}
      index={index}
      title={movie.title}
      image={movie.image_url}
      />
    });


    return (
      <section>

      <div>
        <h2>{movies}</h2>
      </div>

      </section>
    );
  }

}

export default Library;

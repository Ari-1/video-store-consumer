import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Movie from './Movie';
import PropTypes from 'prop-types';
import axios from 'axios';


const SEARCH_URL = "http://localhost:3000/movies?query="
const BASE_URL = "http://localhost:3000/movies"

class Search extends Component {
  static propTypes = {
    updateStatusCallback: PropTypes.func
  }
  constructor() {
    super();
    this.state = {
      results: [],
    };
  }

  searchMovie = (query) => {
    let url = SEARCH_URL + query.title
    this.props.updateStatusCallback('Loading...', 'success');
    axios.get(url)
      .then((response) => {
        this.props.updateStatusCallback('Successfully loaded search', 'success');
        this.setState({ results: response.data });
      })
      .catch((error) => {
        this.props.updateStatusCallback(error.message, 'error');
      });
  }

  addMovie = (movie) => {
    console.log(movie.image_url)
    axios.post(BASE_URL, movie)
      .then((response) => {
        console.log(response);
        this.props.updateStatusCallback(`Successfully added ${movie.title} to Library`, 'success');
      })
      .catch((error) => {
        this.props.updateStatusCallback(error.message, 'error');
      })
  }

  removeMovieButton = () => {
    let movies = this.state.results
    for (let movie in movies){
      movie.isVisible = false;
    }
    this.setState({results: movies});
  }

  render() {
    const movies = this.state.results.map((movie, index) => {
      return <Movie
      key={index}
      title={movie.title}
      image={movie.image_url}
      overview={movie.overview}
      release_date={movie.release_date}
      external_id={movie.external_id}
      addMovieCallback={this.addMovie}
      isVisible={this.removeMovieButton}/>
    });

    return(
      <section>
        <div>
          <SearchForm resultCallback={this.searchMovie} />
        </div>
        { movies }
      </section>

    )
  }
}

export default Search;

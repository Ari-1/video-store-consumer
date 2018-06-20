import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Movie from './Movie';
import axios from 'axios';


const SEARCH_URL = "http://localhost:3000/movies?query="
const BASE_URL = "http://localhost:3000/movies"

class Search extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
  }

  searchMovie = (query) => {
    let url = SEARCH_URL + query.title
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        this.setState({ results: response.data });
      })
      .catch((error) => {
        console.log(error)
      });
  }

  addMovie = (movie) => {
    axios.post(BASE_URL, movie)
      .then((response) => {
        console.log(response.config.data)
      })
      .catch((error) => {
        console.log(error);
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

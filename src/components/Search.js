import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Movie from './Movie';
import axios from 'axios';


const BASE_URL = "http://localhost:3000/movies?query="
const SEARCH_URL = "http://localhost:3000/movies"

class Search extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
  }

  searchMovie = (query) => {

    let url = BASE_URL + query.title
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        this.setState({ results: response.data });
      })
      .catch((error) => {
        console.log(error)

      });
  }

  addMovie = (query) => {
    console.log(query)
    axios.post(SEARCH_URL, query)
      .then((response) => {
        let updatedList = this.state.results;
        updatedList.push(response.data);
        this.setState({results: updatedList});
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    const movies = this.state.results.map((movie, index) => {
      return <Movie
      key={index}
      title={movie.title}
      image= {movie.image_url}
      addMovieCallback={this.addMovie}/>
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

import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Movie from './Movie';


const BASE_URL = "http://localhost:3000/movies?query="

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

  render() {
    const movies = this.state.results.map((movie, index) => {
      return <Movie
      key={index}
      title={movie.title}
      image= {movie.image_url} />
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

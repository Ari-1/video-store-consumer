import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import Movie from './Movie';


const BASE_URL = "https://api.themoviedb.org/3/search/movie?api_key=2fade445124f4a598ae0a12090f7f525&language=en-US&query="

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
        console.log(response.data.results);

        let updatedList = this.state.results;
        updatedList.push(response.data.results);
        this.setState({ results: updatedList });
      })

      .catch((error) => {
        console.log(error)

      });
  }

  render() {

    const movies = this.state.results.map((movie, index) => {
      return <Movie key={index}
      index={index}
      title={movie.title}
      image={movie.image_url}
      />
    });

    return(
      <section>
        <div>
          <SearchForm resultCallback={this.searchMovie} />
        </div>

        {movies}
      </section>

    )
  }


}

export default Search;

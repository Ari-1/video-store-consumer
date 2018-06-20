import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     image_url: '',
  //     overview: '',
  //     release_date: '',
  //     title: '',
  //     inventory: 10
  //   };
  // }

  // let updateState = Object.assign({}, this.state)
  // updateState['image_url'] = this.props.image_url
  // this.setState(updateState);

  onClickHandler = () => {
    // this.props.addMovieCallback(this.state);

    let image = this.props.image.split("/").pop();

    let movie = {
      title: this.props.title,
      image_url: '/'+image,
      overview: this.props.overview,
      release_date: this.props.release_date,
      external_id: this.props.external_id,
      inventory: 10
    }
    console.log(`adding new movie: ${this.props.image}`);
    this.props.addMovieCallback(movie);
  }

  movieItem() {
    if (this.props.isVisible) {
      return (
        <button onClick={ this.onClickHandler }>Add to Library</button>
      );
    }
  }

  render() {

    // let onClickHandler = () => {
    //   // this.props.addMovieCallback(this.state);
    //   let movie = {
    //     title: this.props.title,
    //     image_url: this.props.image,
    //     overview: this.props.overview,
    //     release_date: this.props.release_date,
    //     external_id: this.props.external_id,
    //     inventory: 10
    //   }
    //   console.log(`adding new movie: ${this.props.title}`);
    //   this.props.addMovieCallback(movie);
    // }

    return (
      <section>
      <div>
        <h1>{this.props.title}</h1>
        <img src={this.props.image} alt={this.props.title}/>
      </div>
      <div>
        {this.movieItem()}
      </div>
      </section>
    );
  }
}

Movie.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  overview: PropTypes.string,
  release_date: PropTypes.string,
  external_id: PropTypes.number,
  addMovieCallback: PropTypes.func,
  isVisible: PropTypes.boolean
};

export default Movie;

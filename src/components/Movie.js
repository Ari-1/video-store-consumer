import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    external_id: PropTypes.number,
    id: PropTypes.number,
    addMovieCallback: PropTypes.func,
    rentalMovieCallback: PropTypes.func,
    isVisible: PropTypes.bool
  };

  onClickHandler = () => {
    let image = this.props.image.split("/").pop();
    let movie = {
      title: this.props.title,
      image_url: '/'+ image,
      overview: this.props.overview,
      release_date: this.props.release_date,
      external_id: this.props.external_id,
      inventory: 10
    }
    this.props.addMovieCallback(movie);
  }

  movieInfo = (event) => {
    this.props.rentalMovieCallback(event.target);
  }

  movieItem() {
    if (this.props.isVisible) {
      return (
        <button onClick={ this.onClickHandler }>Add to Library</button>
      );
    } else {
      return (
        <button onClick={this.movieInfo} id={this.props.id} title={this.props.title}>Select for Rental</button>
      );
    }
  }

  render() {
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

export default Movie;

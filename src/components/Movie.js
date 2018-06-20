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

  render() {

    let onClickHandler = () => {
      // this.props.addMovieCallback(this.state);
      let movie = {
        title: this.props.title,
        image_url: this.props.image,
        overview: this.props.overview,
        release_date: this.props.release_date,
        external_id: this.props.external_id,
        inventory: 10
      }
      console.log(`adding new movie: ${this.props.title}`);
      this.props.addMovieCallback(movie);
    }

    return (
      <section>
      <div>
      <h1>{this.props.title}</h1>
      <img src={this.props.image} alt={this.props.title}/>
      <button onClick={ onClickHandler }>Add to Library</button>
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
  addMovieCallback: PropTypes.func
};

export default Movie;

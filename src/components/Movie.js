import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
  constructor() {
    super();
    this.state = {
      image_url: this.props.image,
      // overview: this.props.overview,
      // release_date: this.props.release_date,
      title: this.props.title
    }
  }


  render() {

    let onClickHandler = () => {
      console.log(this.state)
      this.props.addMovieCallback(this.state);
    }

    // if (this.props.title.include?(this.props.title)) {
    //   return <button onClick={ onClickHandler }>Add to Library</button>
    // }

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
};

export default Movie;

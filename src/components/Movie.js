import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {

    return (
      <section>
      <div>
        <h1>{props.title}</h1>

        <img src={props.image} alt={props.title}/>
      </div>
      </section>
    );
}

Movie.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default Movie;

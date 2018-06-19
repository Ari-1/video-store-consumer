import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {

    return (
      <section>
      <div>
        <h1>{props.title}</h1>
        <img src={props.image} alt={props.title}/>
        <button>Add to Library</button>
      </div>
      </section>
<<<<<<< HEAD
    );
=======
    )
  }
>>>>>>> parent of 9683c11... Created SearchForm.js for our search input and imported the form into Search.js and added axios to get the url with input.
}

Movie.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default Movie;

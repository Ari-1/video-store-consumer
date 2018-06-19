import React from 'react';
import PropTypes from 'prop-types';

const CustomerData = (props) => {

    return (
      <section>
        <h3>{props.name}</h3>
        <p>{props.movies_count}</p>
      </section>
    )
}

CustomerData.propTypes = {
  name: PropTypes.string,
  movies_count: PropTypes.number,
};

export default CustomerData;

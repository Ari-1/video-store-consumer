import React from 'react';
import PropTypes from 'prop-types';

const Status = (props) => {
    return (
      <section className={`status ${props.type}`}>
        {props.message}
      </section>
    );
}

Status.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string
}
export default Status;

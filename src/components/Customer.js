import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Customer extends Component {

  customerInfo = (event) => {
    this.props.rentalCustomerCallback(event.target);
  }
  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <p>{this.props.movies_count}</p>
        <button onClick={this.customerInfo} name={this.props.name} id={this.props.id}>Select for Rental</button>
      </section>
    )
  }
}

Customer.propTypes = {
  name: PropTypes.string,
  movies_count: PropTypes.number,
  rentalCustomerCallback: PropTypes.func,
  id: PropTypes.number
};

export default Customer;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomerCollection from './CustomerCollection';
import Library from './Library';

// const RENTAL_URL = "http://localhost:3000/rentals/"

class RentalContainer extends Component {
  static propTypes = {
    rentalCallback: PropTypes.func
  };

  constructor() {
    super();
    this.state = {
      movie: '',
      customerId: '',
      customerName: ''
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.rentalCallback(this.state);

    this.setState({
      movie: '',
      customerId: '',
      customerName: ''
    })
  }


  buildCustomer = (customer) => {
    this.setState({
      customerId: customer.id,
      customerName: customer.name
    });
  }

  render() {
    const customer = <CustomerCollection
      getCustomerCallback={this.buildCustomer()} />
    return (
        <div>
          {customer}
          <button onClick={this.onSubmit}>Check-Out</button>
        </div>
    );
  }
}

export default RentalContainer;

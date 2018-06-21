import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Customer from './Customer';

const BASE_URL = "http://localhost:3000/customers"

class CustomerCollection extends Component {
  static propTypes = {
    getCustomerCallback: PropTypes.func
  }
  constructor() {
    super();
    this.state = {
      customers: []
    }
  }

  componentDidMount() {
    // this.props.updateStatusCallback('Loading...', 'success');
    axios.get(BASE_URL)
    .then((response) => {
      // this.props.updateStatusCallback('Successfully loaded all movies!', 'success');
      const customers = response.data;
      this.setState({ customers: customers });
    })
    .catch((error) => {
      console.log('Error :(');
      console.log(error);
      // this.props.updateStatusCallback(error.message, 'error');
    });
  }

  rentalForCustomer = (customer) => {
    console.log(customer.name);
    this.props.getCustomerCallback(customer);
  }

  render() {

    const customers = this.state.customers.map((customer, index) => {
      return <Customer
      key={index}
      id={customer.id}
      name={customer.name}
      movies_count={customer.movies_checked_out_count}
      rentalCustomerCallback={this.rentalForCustomer}
      />
    });


    return (
      <section>

        <h2>Customers</h2>
        <div>{customers}</div>

      </section>
    );
  }

}

export default CustomerCollection;

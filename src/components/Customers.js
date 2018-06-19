import React, { Component } from 'react';
import axios from 'axios';
import CustomerData from './CustomerData';

const BASE_URL = "http://localhost:3000/customers"

class Customers extends Component {
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

  render() {

    const customers = this.state.customers.map((customer, index) => {
      return <CustomerData key={index}
      index={index}
      name={customer.name}
      movies_count={customer.movies_checked_out_count}
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

export default Customers;

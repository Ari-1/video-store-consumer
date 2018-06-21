import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Props
} from 'react-router-dom'

import Home from './Home'
import Search from './Search'
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
      customerName: 'None'
    };
  }

  // onSubmit = (event) => {
  //   event.preventDefault();
  //   this.props.rentalCallback(this.state);
  //
  //   this.setState({
  //     movie: '',
  //     customerId: '',
  //     customerName: ''
  //   })
  // }


  buildCustomer = (customer) => {
    console.log(customer.name)
    this.setState({
      customerId: customer.id,
      customerName: customer.name
    });
  }

  render() {

    return (
      <main>


        <Router>
          <div>
            <h1>VideoStore</h1>
            <div className="menu">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/movies">Library</Link></li>
                <li><Link to="/customers">Customers</Link></li>
                <li>Selected Customer: {this.state.customerName}</li>
              </ul>
            </div>
            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/search" component={Search}/>
            <Route path="/movies" component={Library}/>
            <Route path="/customers" render={props => <CustomerCollection
                getCustomerCallback = {this.buildCustomer}
                />} />
          </div>
        </Router>
      </main>
    );
  }
}

export default RentalContainer;

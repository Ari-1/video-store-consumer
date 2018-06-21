import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Props
} from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Search from './Search';
import CustomerCollection from './CustomerCollection';
import Library from './Library';
import './RentalContainer.css';


const RENTAL_URL = "http://localhost:3000/rentals/";

class RentalContainer extends Component {
  static propTypes = {
    rentalCallback: PropTypes.func
  };

  constructor() {
    super();
    this.state = {
      movieId: '',
      movieTitle: 'None',
      customerId: '',
      customerName: 'None'
    };
  }


  buildCustomer = (customer) => {
    console.log(customer.name)
    this.setState({
      customerId: customer.id,
      customerName: customer.name
    });
  }

  buildMovie = (movie) => {
    console.log(movie)
    this.setState({
      movieId: movie.id,
      movieTitle: movie.title
    });
  }

  sendRequest = () => {
    const url = RENTAL_URL + this.state.movieTitle + '/check-out'
    axios.post(url, this.state.customerId)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
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
                <span className="rental">Selected Customer:</span> <li>{this.state.customerName}</li>
                <span className="rental">Selected Movie:</span>
                <li>{this.state.movieTitle}</li>
                <li><button onClick={this.sendRequest}>Check-out!</button></li>
              </ul>
            </div>
            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/search" component={Search}/>
            <Route path="/movies" render={props =>
              <Library
                getMovieCallback= {this.buildMovie} />} />
            <Route path="/customers" render={props => <CustomerCollection
                getCustomerCallback = {this.buildCustomer} />} />
          </div>
        </Router>
      </main>
    );
  }
}

export default RentalContainer;

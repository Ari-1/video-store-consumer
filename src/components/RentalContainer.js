import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link,
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
    rentalCallback: PropTypes.func,
    sendStatusCallback: PropTypes.func
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
    let date = new Date();
    date.setDate(date.getDate() + 7)

    const url = RENTAL_URL + this.state.movieTitle + '/check-out'
    axios.post(url,
      {title: this.state.movieTitle,
      customer_id: this.state.customerId,
      due_date: date})
      .then((response) => {
        console.log(response)
        this.props.sendStatusCallback(`Successfully checked out movie,
          ${this.state.movieTitle} for ${this.state.customerName}`, `success`)
      })
      .catch((error) => {
        console.log(error);
        this.props.sendStatusCallback('Failed to check-out movie', 'error');
      })
  }

  sendStatus = (message, type) => {
    console.log(message, type)
    this.props.sendStatusCallback(message, type);
  }

  render() {

    return (
      <main>
        <Router>
          <section>

            <article className="menu">
              <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/search">SEARCH</Link></li>
                <li><Link to="/movies">LIBRARY</Link></li>
                <li><Link to="/customers">CUSTOMERS</Link></li>
                <div className="rental">
                  <span className="selected">
                    SELECTED CUSTOMER: <li>{this.state.customerName}</li>
                  </span>
                  <span className="selected">
                    SELECTED MOVIE: <li>{this.state.movieTitle}</li>
                  </span>
                  <li>
                    <button onClick={this.sendRequest}>CHECKOUT NOW</button>
                  </li>
                </div>
              </ul>
            </article>

            <hr/>

            <article className="content-body">
              <Route exact path="/" component={Home}/>
              <Route path="/search" render={ () =>
                <Search updateStatusCallback = {
              this.sendStatus} />} />
              <Route path="/movies" render={ () =>
                <Library
                  getMovieCallback= {this.buildMovie}
                  updateStatusCallback = {this.sendStatus} />} />
              <div className="movies">
                <Route path="/customers" render={ () => <CustomerCollection
                  getCustomerCallback = {this.buildCustomer}
                  updateStatusCallback = {this.sendStatus}/>} />
              </div>
            </article>

          </section>
        </Router>
      </main>
    );
  }
}

export default RentalContainer;

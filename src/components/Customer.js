import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Hamster from './hamster.svg';
import Popcorn from './popcorn.svg';
import Candy from './candy.svg';
import Film from './film.svg';
import Filming from './filming.svg';
import Videotape from './videotape.svg';
import Drink from './drink.svg';
import './Customer.css';

const myArray = [Hamster, Popcorn, Candy, Film, Filming, Videotape, Drink];

class Customer extends Component {

  customerInfo = (event) => {
    this.props.rentalCustomerCallback(event.target);
  }

  rand() {
    return myArray[Math.floor(Math.random() * myArray.length)];
  }

  render() {
    return (
      <section id="customers">
        <img src={this.rand()} height='200px' width='200px' alt="Hamster profile"/>
        <h3>{this.props.name}</h3>
        <p>{this.props.movies_count} Movies checked out</p>
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

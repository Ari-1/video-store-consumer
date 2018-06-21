import React, { Component } from 'react';
import Home from './components/Home'
import Search from './components/Search'
import Library from './components/Library'
import CustomerCollection from './components/CustomerCollection'
import RentalContainer from './components/RentalContainer'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';


const App = () => (
  <Router>
    <div>
      <h1>VideoStore</h1>
      <div className="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/movies">Library</Link></li>
          <li><Link to="/customers">Customers</Link></li>
          <li><Route component={RentalContainer}/></li>
        </ul>
      </div>
      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/search" component={Search}/>
      <Route path="/movies" component={Library}/>
      <Route path="/customers" component={CustomerCollection}/>
    </div>
  </Router>
)
export default App

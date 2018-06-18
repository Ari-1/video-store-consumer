import React, { Component } from 'react';
import Home from './components/Home'
import Search from './components/Search'
import Library from './components/Library'
import Customers from './components/Customers'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';


const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/movies">Library</Link></li>
        <li><Link to="/customers">Customers</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/search" component={Search}/>
      <Route path="/movies" component={Library}/>
      <Route path="/customers" component={Customers}/>
    </div>
  </Router>
)
export default App

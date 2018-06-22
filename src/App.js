import React, {Component} from 'react';
import RentalContainer from './components/RentalContainer';
import Status from './components/Status';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      status: {
        message: '',
        type: 'success'
      }
    }
  }

  updateStatus = (message, type) => {
    this.setState({
      status: {
        message: message,
        type: type
      }
    })
  }
  render() {
    return (
      <div id="body">
        <header id="header-background">
        </header>
      <div id="status">
        <Status message={this.state.status.message} type={this.state.status.type}/>
      </div>
      < RentalContainer
      sendStatusCallback ={this.updateStatus} />
      </div>
    );
  }
}

export default App

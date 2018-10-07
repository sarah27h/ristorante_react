import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar,NavbarBrand } from 'reactstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar color="danger" light expand="md">
          <NavbarBrand href="/">Best Bakery</NavbarBrand>
          </Navbar>
      </div>
    );
  }
}

export default App;

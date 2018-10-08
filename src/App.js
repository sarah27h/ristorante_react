import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar,NavbarBrand } from 'reactstrap'
import Menu from './components/Menu.js'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar color="danger" light expand="md">
            <NavbarBrand href="/">Best Resturant</NavbarBrand>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;

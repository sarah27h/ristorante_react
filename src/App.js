import React, { Component } from 'react';
import './App.css';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from './components/Menu.js';
import { DISHES } from './data/dishes';

class App extends Component {
  constructor(props) {
    super(props);

    // add dishes as a state into parent App component
    this.state = {
      dishes : DISHES
    };
  }
  render() {
    return (
      <div>
        <Navbar color="danger" light expand="md">
            <NavbarBrand href="/">Best Resturant</NavbarBrand>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;

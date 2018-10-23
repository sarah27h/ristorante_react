import React, { Component } from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from './Menu.js';
import Dishdetail from './Dishdetail';
import { DISHES } from '../data/dishes';

class Main extends Component {
  constructor(props) {
    super(props);

    // add dishes as a state into parent App component
    this.state = {
      dishes : DISHES,
      selectedDish : null
    };
  }


    /* update selectedDish state to the clicked dish  */
    onDishSelected(dishId) {
        this.setState( {selectedDish : dishId} );
    }

  render() {
    return (
      <div>
        <Navbar color="danger" light expand="md">
            <NavbarBrand href="/">Best Resturant</NavbarBrand>
        </Navbar>
        
        <Menu 
            dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelected(dishId)} />

        <Dishdetail 
            selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            {console.log(this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0])}
      </div>
    );
  }
}

export default Main;

import React, { Component } from 'react';
import './App.css';
import { Navbar,NavbarBrand } from 'reactstrap';
import Main from './components/Main.js';

class App extends Component {
  
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import Section from './Section.js'
import MenuItem from './MenuItem.js'
import Footer from './Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header
          name = "Kitty+Burn"
        />

        <Section
          name = "All Day Menu"
        />

        <MenuItem
          id = "0"
          name = "French Toast"
          price = "16.00"
          tags = ""
          image = "/img_square_1.png"
          description = "Hazlenut sweet brioche sandwich, mandarin, strawberry gel, hazlenut shortbread soil..."
        />

        <MenuItem
          id = "1"
          name = "Eggs Burnadict"
          price = "20.00"
          tags = "GF"
          image = "/img_square_2.png"
          description = "Hickory-smoked pork neck roll, grapefruit hollandaise, crispy pigs ear, compressed..."
        />

        <MenuItem
          id = "2"
          name = "4 Cheese Omelette"
          price = "21.00"
          tags = ""
          image = "/img_square_3.png"
          description = "Scarmoza (smoked mozzarella), goats' cheese, gruyere, basil ricotta, mizuna, chervil..."
        />

        <MenuItem
          id = "3"
          name = "French Toast"
          price = "16.00"
          tags = ""
          image = "/img_square_1.png"
          description = "Hazlenut sweet brioche sandwich, mandarin, strawberry gel, hazlenut shortbread soil..."
        />

        <MenuItem
          id = "4"
          name = "Eggs Burnadict"
          price = "20.00"
          tags = "GF"
          image = "/img_square_2.png"
          description = "Hickory-smoked pork neck roll, grapefruit hollandaise, crispy pigs ear, compressed..."
        />

        <MenuItem
          id = "5"
          name = "4 Cheese Omelette"
          price = "21.00"
          tags = ""
          image = "/img_square_3.png"
          description = "Scarmoza (smoked mozzarella), goats' cheese, gruyere, basil ricotta, mizuna, chervil..."
        />

        <Footer />

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import Section from './Section.js'
import MenuItem from './MenuItem.js'
import Footer from './Footer.js'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      venue: 'Dexter',
      sections: [
        {
          name: 'Snacks',
          items: [
            {
              id: "0",
              name: "Crispy Fried Shitakes",
              price: "10.00",
              tags: "",
              image: "/Dexter/3.png",
              description: ""
            },
            {
              id: "1",
              name: "Kentucky Fried Cauliflower",
              price: "9.00",
              tags: "",
              image: "/Dexter/4.png",
              description: ""
            },
            {
              id: "2",
              name: "Meat Donuts",
              price: "1 for 5.00, 3 for 12.00",
              tags: "",
              image: "/Dexter/5.png",
              description: ""
            }
          ]
        },
        {
          name: 'Small',
          items: [
            {
              id: "3",
              name: "Smoked Lamb Ribs",
              price: "16.00",
              tags: "",
              image: "/Dexter/7.png",
              description: "Sweet & spicy sauce, BBQ mayo"
            },
            {
              id: "4",
              name: "Fried Chicken",
              price: "18.00",
              tags: "",
              image: "/Dexter/8.png",
              description: "1/2 Fried chicken, pickled daikon"
            },
            {
              id: "5",
              name: "Korean Beef Tartare",
              price: "16.00",
              tags: "",
              image: "/Dexter/9.png",
              description: "Wild plum syrup, nashi pear, sesame"
            }
          ]
        },
        {
          name: 'Large',
          items: [
            {
              id: "6",
              name: "Point End Brisket",
              price: "31.00",
              tags: "220g",
              image: "/Dexter/10.png",
              description: "Tender Valley 3+ beef"
            },
            {
              id: "7",
              name: "Cured Pork Neck",
              price: "27.00",
              tags: "220g",
              image: "/Dexter/11.png",
              description: "Borrowdale pork"
            },
            {
              id: "8",
              name: "Caramel Short Rib",
              price: "32.00",
              tags: "Each",
              image: "/Dexter/12.png",
              description: "Tender Valley 3+ beef"
            },
            {
              id: "9",
              name: "Rump Cap Steak",
              price: "35.00",
              tags: "300g",
              image: "/Dexter/15.png",
              description: "Rangers Valley black onyx"
            },
            {
              id: "10",
              name: "BBQ Eggplant",
              price: "24.00",
              tags: "",
              image: "/Dexter/16.png",
              description: "Baked to order, allow 25mins"
            }
          ]
        },
        {
          name: 'Buns',
          items: [
            {
              id: "11",
              name: "Crispy Fried Chicken",
              price: "15.00",
              tags: "",
              image: "/Dexter/17.png",
              description: "Asian slaw, BBQ mayo, hot sauce"
            },
            {
              id: "12",
              name: "Dry Aged Cheese Burger",
              price: "15.00",
              tags: "",
              image: "/Dexter/18.png",
              description: "Secret sauce, American cheese, pickles"
            },
            {
              id: "13",
              name: "Southern Fried Tofu",
              price: "15.00",
              tags: "",
              image: "/Dexter/19.png",
              description: "Asian slaw, BBQ mayo, hot sauce"
            },
            {
              id: "14",
              name: "Beef Brisket",
              price: "15.00",
              tags: "",
              image: "/Dexter/20.png",
              description: "House pickles, vinegar slaw, mustard"
            }
          ]
        },
        {
          name: 'Greens / Salad',
          items: [
            {
              id: "15",
              name: "Burnt Sriracha Corn",
              price: "8.00",
              tags: "",
              image: "/Dexter/23.png",
              description: ""
            },
            {
              id: "16",
              name: "Grain Salad",
              price: "12.00",
              tags: "",
              image: "/Dexter/24.png",
              description: "Grains, crispy pork, pickled quince, radicchio"
            }
          ]
        },
        {
          name: 'Dessert',
          items: [
            {
              id: "17",
              name: "Milk And Cookies",
              price: "12.00",
              tags: "",
              image: "/Dexter/27.png",
              description: "Choc-chip cookies, milk ice-cream"
            }
          ]
        },
        {
          name: 'Extras',
          items: [
            {
              id: "18",
              name: "Bone Marrow Mash",
              price: "7.00",
              tags: "",
              image: "/Dexter/29.png",
              description: ""
            },
            {
              id: "19",
              name: "Shoestring Fries",
              price: "7.00",
              tags: "",
              image: "/Dexter/30.png",
              description: ""
            }
          ]
        }
      ]
    }
  }

  printMenu() {
    let sections = this.state.sections
    let menu = []

    for (let s = 0; s < sections.length; s++) {
      menu.push(
        <Section
          name = { sections[s].name }
          id = { s }
          key = { s }
        />
      )
      for (let i = 0; i < sections[s].items.length; i++) {
        menu.push(
          <MenuItem
            id = { sections[s].items[i].id }
            name = { sections[s].items[i].name }
            price = { sections[s].items[i].price }
            tags = { sections[s].items[i].tags }
            image = { sections[s].items[i].image }
            description = { sections[s].items[i].description }
            key = { sections[s].items[i].id + sections.length }
          />
        )
      }
    }

    return menu
  }

  render() {

    let venue = this.state.venue
    let sections = this.state.sections

    return (
      <div className="App">

        <Header
          name = { venue }
          sections = { sections }
        />

        { this.printMenu() }

        <Footer />

      </div>
    );
  }
}

export default App;

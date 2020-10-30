import React from 'react';
import Header from './Header.jsx';
import Form from './Form.jsx';
import List from './List.jsx';
import dummyData from './dummydata.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: []
    }

    this.addGrocery = this.addGrocery.bind(this);
    this.togglePurchase = this.togglePurchase.bind(this);
    this.updateGroceries = this.updateGroceries.bind(this);
  }

  componentDidMount() {
    axios.get('/groceries')
    .then(this.updateGroceries)
    .catch((error) => {console.log(error)})
  }

  updateGroceries(response) {
    this.setState({
      groceries: response.data
    })
  }

  addGrocery(grocery) {
    this.setState({groceries: [...this.state.groceries, grocery]})
  }

  togglePurchase(id) {
    // Change the purchased flag on a grocery that was clicked
      // How do I know what grocery was clicked?
    var updatedGrocery = Object.assign({}, this.state.groceries[id]);
    updatedGrocery.purchased = !updatedGrocery.purchased;
    var updatedGroceries = [...this.state.groceries];
    updatedGroceries[id] = updatedGrocery;
    this.setState({groceries: updatedGroceries});
  }

  render() {
    return (
      <div>
        <Header />
        <Form addGrocery={this.addGrocery}/>
        <List groceries = {this.state.groceries} togglePurchase={this.togglePurchase}/>
      </div>
    )
  }
}

export default App

// < > syntax is react's format for calling a function as a constructor to create a JSX element
// const List = new List(dummyData)
// this.subscribed = {
//   List: ['groceries']
// }

// var setState = function(newData) {
//   for(var key in newData) {
//     this.state[key] = newData[key]
//   }

//   for(var subscriber in subscribed) {
//     for(var item in this.subscribed[subscriber]) {
//       if (newData[item]) {
//         Component.rerender(subscriber)
//       }
//     }
//   }
// }

// Create new file for React Element
// Create import and export lines in new element
// Write constructor function
// Import new file into file where it will be used
// Create constructor in the HTML template

// Spread operator
  // var fruits = ['oranges', 'apples', 'pears']
  // ...fruits === 'oranges, 'apples', 'pears'
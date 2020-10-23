import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: '',
      purchased: false
    }

    this.handleInput = this.handleInput.bind(this);
    this.submitGrocery = this.submitGrocery.bind(this);
  }

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  submitGrocery(event) {
    event.preventDefault();
    this.props.addGrocery(this.state);
  }

  render() {
    return (
      <form onSubmit={this.submitGrocery}>
        <label> Item
          <input name="name" value={this.state.name} onChange={this.handleInput}/>
        </label>
        <label> Qunatity
          <input name="quantity" value={this.state.quantity} onChange={this.handleInput}/>
        </label>
        <button>Add Grocery</button>
      </form>
    )
  }
}

export default Form;

// change the keyword to use class with extends to inherit parent methods
// remove function syntax
// use the constructor keyword with super to inherit the parent properties
// create a render function that returns the former return value of our stateless function

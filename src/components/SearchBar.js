import React, { Component } from 'react';
import 'styles/searchbar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: ''
    }

    // bind functions
    this.onSubmit = this.onSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(e){
    this.setState({number: e.target.value})
  }

  onSubmit(e) {
    // prevent form from being sent
    e.preventDefault();

    // grab number value
    let number = this.state.number;

    // check if number is between 0 and 100
    if (number < 0 || number > 100) { // TODO better error handling
      alert('Please enter a number between 0 and 100');
    }

    // reset state so nothing displays in input
    this.setState({number: ''})
    // call onFormSubmit
    this.props.onFormSubmit(number);

  }
  render() {
    return(
      <div className="row search">
        <div className="col-md-12">
          <h3>Input a number to find the sum of the squares of the first n natural numbers and the square of the sum of the same first n natural numbers</h3>
          <form onSubmit={this.onSubmit}>
            <input type="number" ref="number" value={this.state.number} onChange={this.updateInput} className="form-control" placeholder="Input a number!"></input>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchBar;

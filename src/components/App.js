import React, { Component } from 'react';
import SearchBar from 'components/SearchBar'

class App extends Component {
  constructor() {
    super();

    // bind functions
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.initialize = this.initialize.bind(this);
  }

  onFormSubmit(number) {

    let initializePromise = this.initialize(number);

    initializePromise.then(function(result){
      let details = result;
      console.log(details);
      }, function(err) {
        console.log(err);
      })


  }


  initialize(number){
    let calculation = n => {
      // calculate sum of squares
      let sumOfSquares=0;
      for (let i=0; i<=n; i++) {
        sumOfSquares += i * i;
      }

      //calculate square of sum;
      let sum=0;
      for (let x=0; x<=n; x++) {
        sum += x;
      }
      let sumOfNums = Math.pow(sum,2);
      return sumOfNums;
    }

    // return new Promise
    return new Promise(function(resolve, reject) {
        if(number) {
          var result = {};
          let currentdate = new Date();
          let datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
          let value = calculation(number);
          result.value = value;
          result.number = number;
          result.datetime = datetime;
          resolve(result);
        }
        else {
          let reason = new Error('not number');
          reject(reason);
        }
    })

  }

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import SearchBar from 'components/SearchBar';
import DataDisplay from 'components/DataDisplay';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    }
    // bind functions
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(number) {

    let initializePromise = this.initialize(number);
    let details;
    // TALK ABOUT THIS
    initializePromise.then(result => {
      details = result;
      let newState = this.state.data;
      newState.push(details);
      this.setState({data:newState});
      console.log(this.state.data)
    }, function(err) {
      console.log(err);
    }.bind(this)) // BIND HERE TO BE ABLE TO ACCESS STATE

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
      // calculate difference
      let difference = Math.abs(sumOfSquares - sumOfNums);
      return difference;
    }

    let countOccurences = n => {
      let count = 1;
      this.state.data.map(z => {
        if (z.number === n) {
          count += 1
        }
      })
      return count;
    }

    let lastDateTime = n => {
      let last = "first occurrence";
      this.state.data.map(z => {
        if (z.number === n) {
          last = z.datetime;
        }
      })
      return last;
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
          let occurrences = countOccurences(number);
          let last_datetime = lastDateTime(number);
          result.value = value;
          result.number = number;
          result.datetime = datetime.toString();
          result.occurrences = occurrences;
          result.last_datetime = last_datetime;
          resolve(result);
        }
        else {
          let reason = new Error('not number');
          reject(reason);
        }
    })
  }

  render() {
    let finalIndex = this.state.data.length;
    let data = this.state.data[finalIndex-1];
    return (
      <div>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <DataDisplay data={data} />
      </div>
    );
  }
}

export default App;

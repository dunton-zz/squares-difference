import React, { Component } from 'react';
import SearchBar from 'components/SearchBar';
import DataDisplay from 'components/DataDisplay';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: '',
      storage: []
    }
    // bind functions
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.logSearch = this.logSearch.bind(this);
  }

  logSearch(details) {
    this.state.storage.push({number:details.number, time: details.datetime});
  }

  onFormSubmit(number) {

    let initializePromise = this.initialize(number);
    let details;
    // TALK ABOUT THIS
    initializePromise.then(result => {
      details = result;
      this.setState({data:details});
      this.logSearch(details);
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
          result.datetime = datetime.toString();
          resolve(result);
        }
        else {
          let reason = new Error('not number');
          reject(reason);
        }
    })
  }


  render() {
    console.log(this.state.storage)
    return (
      <div>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <DataDisplay data={this.state.data}/>
      </div>
    );
  }
}

export default App;

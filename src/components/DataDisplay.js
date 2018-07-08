import React, { Component } from 'react';
import 'styles/datadisplay.css';

const DataDisplay = ({ data }) => {

  if (data) {
    let last;
    if (data.last_datetime === 'first occurrence' ) {
      //<p>The last occurrence happened at: {data.last_datetime}</p>
      last = `This is the first occurrence of ${data.number}`
    } else {
      last = `The last occurrence of ${data.number} happened on ${data.last_datetime}`
    }
    return(
      <div className="row">
        <div className="col-md-12 data">
          <h4>The difference of your request is: {data.value}</h4>
        </div>
        <div className="col-md-6 data">
          <p>Sent at: {data.datetime}</p>
          <p>Number requested: {data.number}</p>
        </div>
        <div className="col-md-6 data">
          <p>How many occurrences: {data.occurrences}.</p>
          <p>{last}</p>
        </div>
      </div>
    )
  }
  else {
    return null;
  }
}


export default DataDisplay;

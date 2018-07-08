import React, { Component } from 'react';
import 'styles/datadisplay.css';

const DataDisplay = ({data}) => {
  console.log(data)
  if (data) {
    return(
      <div className="row">
        <div className="col-md-12 data">
          <h4>The difference of your request is: {data.value}</h4>
          <p>Sent at: {data.datetime}</p>
          <p>Number requested: {data.number}</p>
          <p>This was the {data.occurrences} occurrence of {data.number}, the last occurence happened at {data.last_datetime}</p>
        </div>
      </div>
    )
  }
  else {
    return null;
  }
}


export default DataDisplay;

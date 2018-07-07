import React, { Component } from 'react';
import 'styles/datadisplay.css';

function DataDisplay(props) {
  if (props.data.value) {
    return (
      <div className="row">
        <div className="col-md-12 data">
          <h4>The difference of your request is: {props.data.value}</h4>
          <p>Sent at: {props.data.datetime}</p>
          <p>Number requested: {props.data.number}</p>
        </div>
      </div>
    )
  }
  else {
    return null;
  }
}

export default DataDisplay;

import React, { Component } from 'react';
import 'styles/datadisplay.css';

class DataDisplay extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    if (this.props.data.value) {
      return (
        <div className="row">
          <div className="col-md-12 data">
            <h4>The difference of your request is: {this.props.data.value}</h4>
            <p>Sent at: {this.props.data.datetime}</p>
            <p>Number requested: {this.props.data.number}</p>
          </div>
        </div>
      )
    }
    else {
      return null;
    }
  }
}

export default DataDisplay;

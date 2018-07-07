import React, { Component } from 'react';

class DataDisplay extends Component {
  constructor(props) {
    super(props);

  }
  render() {

    return (
      <div className="row">
        <div className="col-md-12">
          <h4>The difference of your request is: {this.props.data.value}</h4>
          <p>Sent at: {this.props.data.datetime}</p>
          <p>Number requested: {this.props.data.number}</p>
        </div>
      </div>
    );
  }
}

export default DataDisplay;

import React, { Component } from 'react';
import '../App.css';

class TableItem extends Component {
  render() {
    return (
      <>
        <th>{this.props.column1}</th>
        <th>{this.props.column2}</th>
        <th>{this.props.column3}</th>
      </>
    );
  }
}

export default TableItem;

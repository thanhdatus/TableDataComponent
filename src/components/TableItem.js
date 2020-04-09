import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class TableItem extends Component {
  render() {
    return (
      <>
        <tr>
          <th>{this.props.column1}</th>
          <th>{this.props.column2}</th>
          <th>{this.props.column3}</th>
        </tr>
      </>
    );
  }
}

TableItem.propTypes = {
  column1: PropTypes.string.isRequired,
  column2: PropTypes.string.isRequired,
  column3: PropTypes.string.isRequired,
};

export default TableItem;

import React, { Component } from 'react';
import './App.css';
import TableItem from './components/TableItem';

class App extends Component {
  constructor() {
    super();
    this.tableItems = [
      ['Company', 'Contact', 'Country'],
      ['Alfreds Futterkiste', 'Maria Anders', 'Germany'],
      ['Centro comercial Moctezuma', 'Francisco Chang', 'Mexico'],
      ['Ernst Handel', 'Roland Mendel', 'Austria'],
    ];
  }
  render() {
    return (
      <div className='App'>
        <table>
          {this.tableItems.map((item, index) => (
            <tr>
              <TableItem
                key={index}
                column1={item[0]}
                column2={item[1]}
                column3={item[2]}
              />
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default App;

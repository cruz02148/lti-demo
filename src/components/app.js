import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Reservation from './Reservation';
import Header from './Header';


export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className="form-container">
          <Reservation />
        </div>
      </MuiThemeProvider>
    );
  }
}

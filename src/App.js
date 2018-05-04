import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {changeFirstName, changeSecondName} from "./store/actions";
import {bindActionCreators} from "redux";

const putStateToProps = (state) => {
    console.log(state)
    return {
        firstName: state.firstName,
        secondName: state.secondName
    };
};

const putActionsToProps = (dispatch) => {
    return {
        changeFirstName: bindActionCreators(changeFirstName, dispatch),
        changeSecondName: bindActionCreators(changeSecondName, dispatch)
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect(putStateToProps, putActionsToProps)(App);

import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';

import {loadData} from './actions';

class App extends Component {
  componentDidMount() {
    this.props.loadData('Kenitra');
  }

  render() {
    const {
      isLoading,
      success,
      data
    } = this.props.weather;
    return (
      <div className="App">
        {isLoading ? <p>Loading...</p> : ''}
        {success ? data.location.name : ''}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    weather: state.weather
  }
}


export default connect(mapStateToProps, {loadData})(App);

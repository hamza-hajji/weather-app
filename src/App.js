import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';

import {loadData} from './actions';

import Header from './components/Header';
import Results from './components/Results';

class App extends Component {
  state={
    
  }

  componentDidMount() {
    this.props.loadData('Kenitra');
  }

  render() {
    return (
      <div>
        <Header />
        <Results {...this.props.weather} />
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

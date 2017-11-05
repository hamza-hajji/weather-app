import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';

import {loadData} from './actions';

import Header from './components/Header';
import Results from './components/Results';

class App extends Component {
  state={
    isC: true
  }

  componentDidMount() {
    this.props.loadData('Kenitra');
  }

  changeUnit() {
    this.setState({isC: !this.state.isC});
  }

  render() {
    return (
      <div>
        <Header />
        <Results {...this.props.weather} changeUnit={this.changeUnit.bind(this)} {...this.state} />
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

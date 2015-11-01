'use strict';

import React from 'react-native';
import OurApp from './App/components/App';

const { AppRegistry, Component } = React;

class App extends Component {
  render() {
    return (
      <OurApp />
    );
  }
}

AppRegistry.registerComponent('Kuha', () => App);

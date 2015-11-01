'use strict';

import React from 'react-native';
import Nav from './App/components/Nav';
import Main from './App/components/Main';

const { AppRegistry, Component } = React;

class App extends Component {
  render() {
    return (
      <Nav
        initialRoute={{
          component: Main
        }}
      />
    );
  }
}

AppRegistry.registerComponent('Kuha', () => App);

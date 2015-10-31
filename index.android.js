'use strict';

import React from 'react-native';
import Nav from './App/Components/Nav';
import Main from './App/Components/Main';

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

import React, { Component, Navigator } from 'react-native';

export default class Nav extends Component {

  renderScene(route, navigator) {
    const Scene = route.component;

    return (
      <Scene
        route={route}
        navigator={navigator}
      />
    );
  }

  render() {
    return (
      <Navigator
        {...this.props}
        renderScene={this.renderScene}
        configureScene={route => {
          return route.sceneConfig && Navigator.SceneConfigs.FloatFromRight;
        }}
      />
    );
  }

}

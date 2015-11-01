import React, { Component, Navigator } from 'react-native';

export default class Nav extends Component {

  renderScene(route, navigator) {
    const Scene = route.component;

    // TODO: Put Navigator into state?

    return (
      <Scene route={route} navigator={navigator}/>
    );
  }

  render() {
    return (
      <Navigator
        {...this.props}
        renderScene={this.renderScene}
        configureScene={route => route.sceneConfig || Navigator.SceneConfigs.FloatFromRight}
      />
    );
  }

}

import React from 'react-native';

const {
  Component,
  StyleSheet,
  Text,
  View,
} = React;

export default class Main extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Kahen (2) kilon (kg) kuha (siika)</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 48
  },
  text: {
    textAlign: 'center'
  }
});

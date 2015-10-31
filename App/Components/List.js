import React from 'react-native';
import buttonStyles from '../Styles/buttonStyles';

const {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} = React;

export default class List extends Component {

  onBackButton() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>List component</Text>
        <TouchableOpacity onPress={this.onBackButton.bind(this)}>
          <View style={[buttonStyles.button, styles.button]}>
            <Text style={buttonStyles.text}>Back</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    flex: 1,
    paddingTop: 48
  },
  text: {
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#fff'
  }
});

import React from 'react-native';
import buttonStyles from '../styles/buttonStyles';

const {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} = React;

export default class List extends Component {
  render() {
    return (
      <View style={styles.container}>

        {this.props.data.map((fish, key) => {
          return (
            <Text style={styles.text} key={key}>{fish.name}</Text>
          );
        })}

        <TouchableOpacity onPress={this.props.onBackButton}>
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

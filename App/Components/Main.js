import React from 'react-native';
import List from './List';
import buttonStyles from '../Styles/buttonStyles';

const {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} = React;

export default class Main extends Component {

  onViewFishesButton() {
    const { navigator } = this.props;

    navigator.push({
      component: List
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Kahen (2) kilon (kg) kuha (siika)</Text>
        <TouchableOpacity onPress={this.onViewFishesButton.bind(this)}>
          <View style={buttonStyles.button}>
            <Text style={buttonStyles.text}>View List</Text>
          </View>
        </TouchableOpacity>
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

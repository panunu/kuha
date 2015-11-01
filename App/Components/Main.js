import React from 'react-native';
import ListContainer from './smart/ListContainer';
import buttonStyles from '../styles/buttonStyles';

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

    navigator.push({component: ListContainer});
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

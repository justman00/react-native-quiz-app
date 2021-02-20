import React from 'react';
import {
  View,
  StatusBar,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    letterSpacing: -0.02,
    fontWeight: '600',
    margin: 32,
  },
  textInput: {
    width: '75%',
    marginLeft: 32,
    borderColor: 'black',
    borderWidth: 3,
    height: 40,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '46%',
    marginTop: 20,
    marginLeft: 36,
  },
  buttonTextStyles: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

class Success extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = { inputValue: '' };

  onPressHandle = () => {
    // trimite numarul de telefon la baza de date pentru a telefona
    // castigatorul
    this.props.navigation.navigate('QuizIndex');
  };

  handleChangeText = (text) => {
    this.setState({ inputValue: text });
  };

  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.text}>
          Introduceti numarul de telefon si veti fi telefonati pentru a primi
          premiul
        </Text>
        <TextInput
          onChangeText={this.handleChangeText}
          defaultValue={this.state.inputValue}
          placeholder="Introduceti numarul de telefon"
          style={styles.text}
        />
        <TouchableOpacity onPress={this.onPressHandle} style={styles.button}>
          <Text style={styles.buttonTextStyles}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Success;

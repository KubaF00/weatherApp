import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const InputCity = ({value, onChange, elderly}) => {
  return (
    <View style={elderly ? stylesElderly.container : styles.container}>
      <TextInput
        style={elderly ? stylesElderly.input : styles.input}
        type="text"
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

export default InputCity;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    bottom: 175,
    alignItems: 'center',
  },
  input: {
    textAlign: 'center',
    flex: 0.4,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'black',
    opacity: 0.7,
    color: 'white',
    padding: 10,
    marginRight: 5,
    fontSize: 20,
  },
});

const stylesElderly = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    bottom: 195,
    alignItems: 'center',
  },
  input: {
    textAlign: 'center',
    flex: 0.4,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'black',
    opacity: 0.7,
    color: 'white',
    padding: 15,
    marginRight: 5,
    fontSize: 30,
    zIndex: 2,
  },
});

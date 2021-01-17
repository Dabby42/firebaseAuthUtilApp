import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const Input = ({label, value, onChangeText, secureTextEntry, placeholder}) => {
  const {textInput, containerStyle, textStyle} = styles;

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{label}</Text>
      <TextInput
        style={textInput}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 20,
    width: 100,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 2,
    color: '#000',
    fontSize: 18,
    lineHeight: 23,
  },
  containerStyle: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    flex: 1,
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20,
  },
});

export {Input};

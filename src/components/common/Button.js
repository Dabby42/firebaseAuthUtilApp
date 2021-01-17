import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({children, onSubmit}) => {
  return (
    <TouchableOpacity style={styles.containerStyle} onPress={onSubmit}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderColor: '#007aff',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 10,
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007aff',
    alignSelf: 'center',
  },
});

export {Button};

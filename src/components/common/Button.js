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
    alignSelf: 'stretch',
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007aff',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export {Button};

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({headerText}) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    paddingTop: 15,
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    position: 'relative',
    elevation: 2,
  },
});

export {Header};

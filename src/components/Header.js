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
    borderBottomWidth: 2,
    borderColor: '#D3D3D3',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
});

export default Header;

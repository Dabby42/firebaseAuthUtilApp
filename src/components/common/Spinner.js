import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Spinner = (props) => {
  const {viewStyle, spinnerStyle} = styles;
  return (
    <View style={viewStyle}>
      <ActivityIndicator style={spinnerStyle} size={props.size || 'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  spinnerStyle: {
    alignSelf: 'center',
  },
});

export {Spinner};

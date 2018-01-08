import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default ({ name, symbol }) => (
  <View style={root}>
    <Text>Hey There!</Text>
  </View>
);

const styles = StyleSheet.create({
  root: {
    marginTop: 10
  }
});

const { root } = styles;

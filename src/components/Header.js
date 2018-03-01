import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={headerContainer}>
      <Text style={header}>Crypto App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center',
    borderBottomColor: '#EAEAEA',
    borderBottomWidth: 2
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20
  }
});

const { headerContainer, header } = styles;

export default Header;

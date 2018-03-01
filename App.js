import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Header, CryptoContainer } from './src/components';
import Store from './src/Store';
import { Provider } from 'react-redux';
import RootNavigator from './src/RootNavigator';
export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <SafeAreaView style={styles.container}>
          <RootNavigator />
        </SafeAreaView>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

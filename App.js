import React , { Component }from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Landing from './src/modules/landing/landing-container'
import ClashRoyale from './src/modules/clash_royale/clash-royale-container';
export const App = () => {

  const mainNavigator = createStackNavigator({
    Home: {
      screen: Landing,
      screen: ClashRoyale,
      navigationOptions: {
        headerTitle: 'Home'
      }
    }
  })

  const AppContainer = createAppContainer(mainNavigator)
  return (
      <AppContainer style={styles.container} />
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export default App;

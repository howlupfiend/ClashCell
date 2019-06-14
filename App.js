import React , { Component }from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './src/reducers';
import Landing from './src/modules/landing/landing-container'
import ClashRoyale from './src/modules/clash_royale/clash-royale-container';
import ClashOfClans from './src/modules/clash_of_clans/clash-of-clans-container';

export const App = () => {

  const mainNavigator = createStackNavigator(
    {
      Landing: { screen: Landing},
      ClashRoyale: { screen: ClashRoyale },
      ClashOfClans: { screen: ClashOfClans },
    },
    {
      initialRouteName: 'Landing',
      defaultNavigationOptions: {
        headerTitle: <Text>ClashCell</Text>
      }
    }
  );

  const store = createStore(rootReducer , {}, composeWithDevTools(applyMiddleware(thunk)));
  const AppContainer = createAppContainer(mainNavigator);

  return (
    <Provider store={store}>
      <AppContainer style={styles.container} />
    </Provider>
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

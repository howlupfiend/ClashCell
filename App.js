import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Icon } from 'react-native-elements'


import rootReducer from './src/reducers';
import Landing from './src/modules/landing/landing-container';
import ClashRoyale from './src/modules/clash_royale/clash-royale-container';
import ClashRoyaleDecks from './src/modules/clash_royale/clash-royale-deck-container';
import ClashRoyaleSearch from './src/modules/clash_royale/clash-royale-search-container';
import ClashRoyaleTopPlayers from './src/modules/clash_royale/clash-royale-top-players-container';

import ClashOfClans from './src/modules/clash_of_clans/clash-of-clans-container';

export const App = () => {

  const mainNavigator = createStackNavigator(
    {
      Landing: { screen: Landing},
      ClashRoyale: { screen: createBottomTabNavigator({
                      ClashRoyale: {
                        screen: ClashRoyale,
                        navigationOptions: ({ navigation }) => ({
                          tabBarLabel: "Profile Stats",
                          tabBarIcon: () => (
                            <Icon name="ios-person" type='ionicon'></Icon>
                          )
                        })
                      },
                      ClashRoyaleDecks: {
                        screen: ClashRoyaleDecks,
                        navigationOptions: ({ navigation }) => ({
                          tabBarLabel: "Decks",
                          tabBarIcon: () => (
                            <Icon name="ios-albums" type='ionicon'></Icon>
                          )
                        })
                      },
                      ClashRoyaleSearch: {
                        screen: ClashRoyaleSearch,
                        navigationOptions: ({ navigation }) => ({
                          tabBarLabel: "Search",
                          tabBarIcon: () => (
                            <Icon name="ios-search" type='ionicon'></Icon>
                          )
                        })
                      },
                      ClashRoyaleTopPlayers: {
                        screen: ClashRoyaleTopPlayers,
                        navigationOptions: ({ navigation }) => ({
                          tabBarLabel: "Top Players",
                          tabBarIcon: () => (
                            <Icon name="ios-person" type='ionicon'></Icon>
                          )
                        })
                      },
                    }, 
                    {
                      order: ['ClashRoyale', 'ClashRoyaleDecks', 'ClashRoyaleTopPlayers', 'ClashRoyaleSearch'],
                      tabBarOptions: {
                        activeTintColor: 'green',
                        inactiveTintColor: 'gray',
                        style: {
                          backgroundColor: 'white',
                        }
                      }
                    }
                    ),
                      navigationOptions: ({ navigation }) => ({
                        headerTitle: <Text>Clash Royale</Text>
                      })
                   },
      ClashOfClans: { screen: ClashOfClans,
                      naivagationOptions: ({ navigation}) => ({
                        title: "Clash Of Clans Stats"
                      })
                    },
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
    backgroundColor: "#084bcc",
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

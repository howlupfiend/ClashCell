import React , { Component }from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'


import rootReducer from './src/reducers';
import Landing from './src/modules/landing/landing-container'
import ClashRoyale from './src/modules/clash_royale/clash-royale-container';
import ClashRoyaleDecks from './src/modules/clash_royale/clash-royale-deck-container'
import ClashOfClans from './src/modules/clash_of_clans/clash-of-clans-container';

export const App = () => {

  const mainNavigator = createStackNavigator(
    {
      Landing: { screen: Landing},
      ClashRoyale: { screen: createBottomTabNavigator({
                      ClashRoyale: {
                        screen: ClashRoyale,
                        navigationOptions: ({ navigation }) => ({
                          tabBarLabel: "Profile Stats"
                        })
                      },
                      ClashRoyaleDecks: {
                        screen: ClashRoyaleDecks,
                        navigationOptions: ({ navigation }) => ({
                          tabBarLabel: "Decks"
                        })
                      },
                    }, 
                    {
                      order: ['ClashRoyale', 'ClashRoyaleDecks'],
                      tabBarOptions: {
                        activeTintColor: 'yellow',
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

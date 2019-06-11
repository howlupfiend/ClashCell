import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';

class Landing extends React.Component {
  
  _goToClashRoyale() {
    Alert.alert('You Tapped Clash Royale')
    navigate('ClashRoyale')
  }

  _goToClashOfClans() {
    Alert.alert('You Tapped Clash of Clans')
  }

  _goToBrawlStars() {
    Alert.alert('You Tapped Brawl Stars')
  }

  render() {
    return(
      <View style={StyleSheet.container}>
        <Button 
          onPress={this._goToClashRoyale}
          title = "Clash Royale"
          color="#adab20"
        />
        <Button 
          onPress={this._goToClashOfClans}
          title = "Clash Of Clans"
          color="#adab20"
        />
        <Button 
          onPress={this._goToBrawlStars}
          title = "Brawl Stars"
          color="#adab20"
        />
      </View>
    );
  }

}

export default Landing;
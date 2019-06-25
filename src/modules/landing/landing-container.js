import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';

class Landing extends React.Component {
  
  _goToBrawlStars() {
    Alert.alert('You Tapped Brawl Stars')
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={StyleSheet.container}>
        <Button 
          onPress={() => navigate('ClashRoyale')}
          title = "Clash Royale"
          color="#adab20"
        />
        <Button 
          onPress={() => navigate('ClashOfClans')}
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
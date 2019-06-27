import React from 'react';
import { View, Button, StyleSheet, Alert, TouchableHighlight, Image, Text } from 'react-native';

class Landing extends React.Component {
  
  _goToBrawlStars() {
    Alert.alert('You Tapped Brawl Stars')
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <TouchableHighlight onPress={() => navigate('ClashRoyale')}>
            <Image style={styles.touchImage} source={require('../../../assets/clash-royale.png')} />
          </TouchableHighlight>
          <Text style={styles.imageCaption}>Clash Royale</Text> 
        </View>
        <View styles={styles.imageContainer}>
          <TouchableHighlight onPress={() => navigate('ClashOfClans')}>
            <Image style={styles.touchImage} source={require('../../../assets/clash-of-clans-icon.jpeg')} />
          </TouchableHighlight>
          <Text style={styles.imageCaption}>Clash Of Clans</Text>
        </View>

        <Button 
          onPress={this._goToBrawlStars}
          title = "Brawl Stars"
          color="#adab20"
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "space-around",
    backgroundColor: "#084bcc"
  },
  imageContainer:{
    margin: 20
  },
  touchImage: {
    height: 125,
    width: 125
  },
  imageCaption:{
    textAlign: "center",
    marginTop: 5,
    color: "#adab20",
    fontWeight: "bold",
    fontSize: 15
  }
})

export default Landing;
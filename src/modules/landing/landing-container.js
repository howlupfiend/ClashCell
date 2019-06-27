import React from 'react';
import { View, Button, StyleSheet, Alert, TouchableHighlight, Image, Text , Platform} from 'react-native';
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

class Landing extends React.Component {
  state = {
    location: {
      coords: {
        latitude: 0,
        longitude: 0
      }
    },
    errorMessage: null,
  }

  componentWillMount(){
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location.coords.latitude)
    let longitude = location.coords.longitude
    let latitude = location.coords.latitude
    let currentLocation = await Location.reverseGeocodeAsync({latitude, longitude})
    console.log(currentLocation)
    this.setState({ currentLocation });
  };

  _goToBrawlStars() {
    Alert.alert('You Tapped Brawl Stars')
  }

  render() {
    let text = 'Waiting...'

    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.currentLocation) {
      text = JSON.stringify(this.state.currentLocation);
    }

    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <TouchableHighlight style={styles.button} onPress={() => navigate('ClashRoyale')}>
            <Text>Clash Royale</Text>
          </TouchableHighlight>
        </View>
        <View styles={styles.imageContainer}>
          <TouchableHighlight style={styles.button} onPress={() => navigate('ClashOfClans')}>
            <Text>Clash of Clans</Text>
          </TouchableHighlight>
        </View>
        <View styles={styles.imageContainer}>
          <TouchableHighlight style={styles.button} onPress={() => this._goToBrawlStars()}>
            <Text>Brawl Stars</Text>
          </TouchableHighlight>
        </View>

        <Text>{text}</Text>
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
    backgroundColor: "#084bcc",
  },
  button: {
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "black",
    marginTop: "30%",
    zIndex: 5,
    borderRadius:5,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    padding: 20,
    minWidth: 150,
    alignItems: "center"
  },
})

export default Landing;
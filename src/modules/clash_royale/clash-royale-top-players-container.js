import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

import { fetchTopPlayersData } from './actions/top-players-actions';

class ClashRoyaleTopPlayers extends React.Component {

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

    componentDidMount(){
        const { country } = this.state;
        const { fetchTopPlayerDataAction } = this.props;

        fetchTopPlayerDataAction(`_country`)
    }
    
    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }
    
        let location = await Location.getCurrentPositionAsync({});
        let longitude = location.coords.longitude
        let latitude = location.coords.latitude
        let currentLocation = await Location.reverseGeocodeAsync({latitude, longitude})
        currentLocation.map((value) => {
            country = value.isoCountryCode
        })
        console.log(country)
        this.setState({ country });
    }

    render() {
        let text = 'Waiting...'

        if (this.state.errorMessage) {
          text = this.state.errorMessage;
        } else if (this.state.country) {
          text = JSON.stringify(this.state.country);
        }

        return (
            <SafeAreaView>
                <View style={styles.searchBar}>
                    <Text>{text}</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    searchBar: {
        // minWidth: 290,
        marginBottom: 10,
        height: "100%",
    },
})

const mapStateToProps = (state) => {
    const { ClashRoyaleTopPlayersReducer } = state;
    return {
        players: ClashRoyaleTopPlayersReducer.players,
    };
};
export default connect(mapStateToProps, {
    fetchTopPlayerDataAction: fetchTopPlayersData,
})(ClashRoyaleTopPlayers)
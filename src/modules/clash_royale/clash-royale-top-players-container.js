import React from 'react';
import { View, Text, StyleSheet, Platform, Image, ScrollView } from 'react-native'
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
        country: ""
    }


    async componentWillMount(){
        const { fetchTopPlayerDataAction } = this.props;
        if (Platform.OS === 'android' && !Constants.isDevice) {
          this.setState({
            errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
          });
        } else {
            country = await this._getLocationAsync()
            this.setState({country: country}, () => {fetchTopPlayerDataAction(`${country}`)
            // this.setState({country: country}, () => {fetchTopPlayerDataAction(`BR`)
        });
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
        let longitude = location.coords.longitude
        let latitude = location.coords.latitude
        let currentLocation = await Location.reverseGeocodeAsync({latitude, longitude})
        currentLocation.map((value) => {
            country = value.isoCountryCode
        })
        console.log(country)
        return country
    }

    render() {
        const { topPlayers } = this.props;
        const { country } = this.state;

        return (
            <SafeAreaView style={styles.mainContainer}>

                <ScrollView >
                    <View> 
                        <Text style={styles.contentText}>Top 10 - Players "{country}" </Text>
                    </View>
                    {topPlayers.map((player, i) => (
                        <View style={styles.contentContainer} key = {i}>
                            <View style={{flex:3}}>
                            <Text style={styles.playerContent}>Name: {player.name}</Text>
                            <Text style={styles.playerContent}>Rank: {player.rank}</Text>
                            <Text style={styles.playerContent}>Trophies: {player.trophies}</Text>
                            <Text style={styles.playerContent}>Clan: {player.clan.name}</Text>
                            <Text> {player.clan.image}</Text>
                            </View>
                            <View style={{flex:1}}>
                            <Image
                                key = {i}
                                style={{width: 75, height: 75, margin: 3}}
                                source={{uri: player.clan.badge.image}}
                            />
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#084bcc",
    },
    contentContainer: {
        alignContent: "space-around",
        flexDirection: "row",
        alignItems: "flex-start",
        borderWidth: 1,
        margin: 7,
        backgroundColor: "white",
        borderColor: "black",
        zIndex: 5,
        padding: 5,
        borderRadius:5,
        shadowOffset:{  width: 1,  height: 1,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
    },
    playerContent:{
        fontSize: 15,
        margin: 10,
    },
    contentText: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 25,
    },
})

const mapStateToProps = (state) => {
    const { ClashRoyaleTopPlayersReducer } = state;
    return {
        topPlayers: ClashRoyaleTopPlayersReducer.topPlayers,
    };
};
export default connect(mapStateToProps, {
    fetchTopPlayerDataAction: fetchTopPlayersData,
})(ClashRoyaleTopPlayers)
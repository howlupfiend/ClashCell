import React from 'react';
import * as Font from 'expo-font';
import { View, StyleSheet, AsyncStorage} from 'react-native'
import { connect } from 'react-redux'

import { Profile } from './profile-container'
import { fetchProfileData } from './actions/profile-search-actions';


class ClashRoyale extends React.Component {

    componentWillMount() {
        this._storeProfileData("9RP08Y28Y")
    }

    async componentDidMount() {
        Font.loadAsync({
            clashfont: require('../../../assets/fonts/ClashFont.ttf'),
        });
        const { fetchProfileDataAction } = this.props;

            const profileId = await this._retrieveProfileData()
            fetchProfileDataAction(profileId);
    }

    _storeProfileData = async (profileId) => {
        try {
            // console.log(profileId)
            await AsyncStorage.setItem('profileId', profileId )
        } catch (error) {
            console.log("Error saving data")
        }
    }

    _retrieveProfileData = async () => {
        try {
            const value = await AsyncStorage.getItem('profileId');
            // console.log(value)
            if (value !== null) {
                // Our data is fetched successfully

                return value;
            }
        } catch (error) {
            // Error retrieving data
        }
    }

    render(){
        const {
            name,
            trophies,
            leagueRank,
            arena,
            clan,
            games,
            leagueStatistics,
            currentDeck,
        } = this.props;

        return(
                <View style={styles.container}>
                    <Profile name={name}
                    trophies={trophies}
                    leagueRank={leagueRank}
                    arena={arena}
                    clan={clan}
                    games={games}
                    leagueStatistics={leagueStatistics}
                    currentDeck={currentDeck}
                    />
                </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
});

const mapStateToProps = (state) => {
    const { ClashRoyaleProfileReducer } = state;
    return {
        name: ClashRoyaleProfileReducer.profile.name,
        trophies: ClashRoyaleProfileReducer.profile.trophies,
        leagueRank: ClashRoyaleProfileReducer.profile.leagueRank,
        arena: ClashRoyaleProfileReducer.profile.arena,
        clan: ClashRoyaleProfileReducer.profile.clan,
        games: ClashRoyaleProfileReducer.profile.games,
        leagueStatistics: ClashRoyaleProfileReducer.profile.leagueStatistics,
        currentDeck: ClashRoyaleProfileReducer.profile.currentDeck,
    };
};

export default connect(mapStateToProps, {
    fetchProfileDataAction: fetchProfileData,
})(ClashRoyale);
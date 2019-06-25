import React from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'
import { Isao } from 'react-native-textinput-effects'
import Clash from './clash-royale-container'
import { fetchProfileData } from './actions/profile-search-actions';

import { Profile } from './profile-container'

class ClashRoyaleSearch extends React.Component {

    state = {
        profile: '',
        profileEnabled: false,
    };

    handleSubmit() {
        const { profile } = this.state;
        const { fetchProfileDataAction } = this.props;

        if (!profile) return console.log('Please enter valid tag');

        return fetchProfileDataAction(profile)
            .then(() => {
                this.setState({ profileEnabled: true })
            })
            .catch(err => console.log(err));
    }

    renderProfile() {
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

        return (
            <Profile name={name}
                trophies={trophies}
                leagueRank={leagueRank}
                arena={arena}
                clan={clan}
                games={games}
                leagueStatistics={leagueStatistics}
                currentDeck={currentDeck}
            />
        );
    }

    render() {
        const { profile } = this.state;

        return (


            <SafeAreaView>
                <View style={styles.searchBar}>
                    <Isao
                        label='Profile tag'
                        activeColor={'blue'}
                        borderHeight={3}
                        // inputPadding={10}
                        // labelHeight={10}
                        passiveColor={'red'}
                        onChangeText={(input) => this.setState({ profile: input })}
                        onSubmitEditing={() => this.handleSubmit()}
                        value={profile}
                    />
                    {this.state.profileEnabled && this.renderProfile()}
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
})(ClashRoyaleSearch)
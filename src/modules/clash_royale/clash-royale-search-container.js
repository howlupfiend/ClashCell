import React from 'react';
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'
import { Isao } from 'react-native-textinput-effects'


import { fetchSearchProfileData } from './actions/profile-search-actions';
import { Profile } from './profile-container'

class ClashRoyaleSearch extends React.Component {

    state = {
        profileId: '',
        profileEnabled: false,
    };

    handleSubmit() {
        const { profileId } = this.state;
        const { fetchSearchProfileDataAction } = this.props;

        if (!profileId) return console.log('Please enter valid tag');

        return fetchSearchProfileDataAction(profileId)
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
        const { profileId } = this.state;

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
                        onChangeText={(input) => this.setState({ profileId: input })}
                        onSubmitEditing={() => this.handleSubmit()}
                        value={profileId}
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
        name: ClashRoyaleProfileReducer.searchProfile.name,
        trophies: ClashRoyaleProfileReducer.searchProfile.trophies,
        leagueRank: ClashRoyaleProfileReducer.searchProfile.leagueRank,
        arena: ClashRoyaleProfileReducer.searchProfile.arena,
        clan: ClashRoyaleProfileReducer.searchProfile.clan,
        games: ClashRoyaleProfileReducer.searchProfile.games,
        leagueStatistics: ClashRoyaleProfileReducer.searchProfile.leagueStatistics,
        currentDeck: ClashRoyaleProfileReducer.searchProfile.currentDeck,
    };
};
export default connect(mapStateToProps, {
    fetchSearchProfileDataAction: fetchSearchProfileData,
})(ClashRoyaleSearch)
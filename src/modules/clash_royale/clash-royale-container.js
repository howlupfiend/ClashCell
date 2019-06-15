import React from 'react';
import * as Font from 'expo-font';
import { View, Text, StyleSheet, Image , AsyncStorage} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'


import { fetchProfileData } from './actions/profile-search-actions';


class ClashRoyale extends React.Component {
    componentDidMount() {
        Font.loadAsync({
            clashfont: require('../../../assets/fonts/ClashFont.ttf'),
        });

        const { fetchProfileDataAction } = this.props;
        fetchProfileDataAction("9RP08Y28Y");
        // fetchProfileDataAction("UL0JU92V");
        
    }

    // _storeData = async () => {
    //     try {
    //         await AsyncStorage.setItem('')
    //     }
    // }

    render(){
        const {
            name,
            trophies,
            leagueRank,
            arena,
            clan,
        } = this.props;

        return(
            <SafeAreaView>
                <View>
                    <Text  styles={ styles.statsContainer }>
                        Name: {name}{"\n"}
                        Amount of trophies: {trophies}{"\n"}
                        Rank: {leagueRank}{"\n"}
                        Arena: {arena.name} - {arena.arena}{"\n"}
                        Trophy Limit: {arena.trophyLimit}{"\n"}
                    </Text>
                </View>
                <View>
                    <Text>Clan Info</Text>
                    <Text>Name: {clan.name}  Tag: {clan.tag}{"\n"}
                          Clan Role: {clan.role}{"\n"}
                          Current Weekly Donations: {clan.donations}{"\n"}
                    </Text>
                    <Image 
                        style={{width: 75, height: 75}}
                        source={{uri: clan.badge.image}}
                    />
                </View>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    statsContainer: {
        fontFamily: 'clashfont',
    }
});

const mapStateToProps = (state) => {
    const { ClashRoyaleProfileReducer } = state;
    return {
        name: ClashRoyaleProfileReducer.profile.name,
        trophies: ClashRoyaleProfileReducer.profile.trophies,
        leagueRank: ClashRoyaleProfileReducer.profile.leagueRank,
        arena: ClashRoyaleProfileReducer.profile.arena,
        clan: ClashRoyaleProfileReducer.profile.clan,
    };
};

export default connect(mapStateToProps, {
    fetchProfileDataAction: fetchProfileData,
})(ClashRoyale);
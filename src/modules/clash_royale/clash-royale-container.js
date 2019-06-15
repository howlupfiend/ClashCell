import React from 'react';
import * as Font from 'expo-font';
import { View, Text, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'

import { fetchProfileData } from './actions/profile-search-actions';


class ClashRoyale extends React.Component {
    componentDidMount() {
        const { fetchProfileDataAction } = this.props;
        fetchProfileDataAction("9RP08Y28Y");

        Font.loadAsync({
            'clash-font': require('../../../assets/fonts/ClashFont.ttf'),
        });
    }

    render(){
        const {
            name,
            trophies,
            leagueRank,
            arena,
        } = this.props;

        return(
            <SafeAreaView>
                <View>
                    <Text  styles={{ fontFamily: 'clash-font', fontSize: 20 }}>
                        Name: {name}{"\n"}
                        Amount of trophies: {trophies}{"\n"}
                        Rank: {leagueRank}{"\n"}
                        Arena: {arena.name} - {arena.arena}{"\n"}
                        Trophy Limit: {arena.trophyLimit}{"\n"}
                    </Text>
                </View>
            </SafeAreaView>

        );
    }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'flex-start',
//     },
//     statsContainer: {
//         fontFamily: 'ClashFont',
//     }
// });

const mapStateToProps = (state) => {
    const { ClashRoyaleProfileReducer } = state;
    return {
        name: ClashRoyaleProfileReducer.profile.name,
        trophies: ClashRoyaleProfileReducer.profile.trophies,
        leagueRank: ClashRoyaleProfileReducer.profile.leagueRank,
        arena: ClashRoyaleProfileReducer.profile.arena,
    };
};

export default connect(mapStateToProps, {
    fetchProfileDataAction: fetchProfileData,
})(ClashRoyale);
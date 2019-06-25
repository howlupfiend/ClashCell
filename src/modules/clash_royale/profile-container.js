import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-navigation'

import { DeckCard } from './deck-card'

export const Profile =({
    name,
    trophies,
    leagueRank,
    arena,
    clan,
    games,
    leagueStatistics,
    currentDeck,
}) => {
    return(

             <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View  style={ styles.contentContainer }>
                        <Text style={styles.statsHeader}>Profile</Text>
                        <Text style={styles.statsContent}>Name: {name}</Text>
                        <Text style={styles.statsContent}>Amount of trophies: {trophies}</Text>
                        <Text style={styles.statsContent}>Rank: {leagueRank}</Text>
                        <Text style={styles.statsContent}>Arena: {arena.name} - {arena.arena}</Text>
                        <Text style={styles.statsContent}>Trophy Limit: {arena.trophyLimit}</Text>
                    </View>
                    <View  style={ styles.contentContainer }>
                        <Text style={styles.statsHeader}>Clan Info</Text>
                        <Text style={styles.statsContent}>Name: {clan.name}</Text>
                        <Text style={styles.statsContent}>Tag: #{clan.tag}</Text>
                        <Text style={styles.statsContent}>Clan Role: {clan.role}</Text>
                        <Text style={styles.statsContent}>Current Weekly Donations: {clan.donations}</Text>
                        <Image 
                            style={{width: 100, height: 120,margin: 5, position:"absolute", top:0, right:0}}
                            source={{uri: clan.badge.image}}
                        />
                    </View>
                    <View style={ styles.contentContainer }>
                        <Text style={styles.statsHeader}>Game Stats</Text>
                        <Text style={styles.statsContent}>Total games played: {games.total}</Text>
                        <Text style={styles.statsContent}>Total tournament games played: {games.tournamentGames}</Text>
                        <Text style={styles.statsContent}>Total wins: {games.wins}</Text>
                        <Text style={styles.statsContent}>Total war day wins: {games.warDayWins}</Text>
                        <Text style={styles.statsContent}>Total win percentage: {Math.round(games.winsPercent * 100).toFixed(1)}%</Text>
                        <Text style={styles.statsContent}>Total games lossed: {games.losses}</Text>
                        <Text style={styles.statsContent}>Total games drawn: {games.draws}</Text>
                    </View>
                    <View style={ styles.contentContainer }>
                        <Text style={styles.statsHeader}>League Stats</Text>
                        <Text style={styles.statsContent}>Current trophy amount: {leagueStatistics.currentSeason.trophies}</Text>
                        <Text style={styles.statsContent}>Highest trophy amount: {leagueStatistics.currentSeason.bestTrophies}</Text>
                    </View>
                    <View style={ styles.contentContainer }>
                    <Text style={styles.statsHeader}>Most Played Deck</Text>
                        <DeckCard deck={currentDeck}></DeckCard>
                    </View>
                </ScrollView>

            </SafeAreaView>


    );
}
    
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#084bcc",
    },
    contentContainer: {
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
    statsContainer: {
        fontFamily: 'clashfont',
    },
    statsHeader: {
        fontSize: 20,
        fontWeight: "bold"
    },
    statsContent:{
        fontSize: 15,
        margin: 10,
    }
  });


export default Profile;
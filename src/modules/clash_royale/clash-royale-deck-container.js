import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'

import { DeckCard } from './deck-card'
import { fetchPopularDecks } from './actions/deck-list-actions'
// import { FlatList } from 'react-native-gesture-handler';

class ClashRoyaleDecks extends React.Component {
    componentDidMount(){
        const { fetchPopularDecksAction } = this.props;
        fetchPopularDecksAction();
    }
    render() {
        const {
            popularDecks,
        } = this.props;
        return(
            <SafeAreaView style={styles.mainContainer}>
                <View>
                    <Text style={styles.contentText}>Top 10 Decks - Most Popular</Text>
                </View>
                <View>
                </View>
                <ScrollView>
                {popularDecks.map((deck, i) => (
                    <View style={styles.contentContainer} key={i}>
                        <DeckCard
                            deck={deck}>
                        </DeckCard>
                    </View>
                    )
                )
                }
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#084bcc",
        flex: 1,
    },
    contentText: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 25,
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
  });

const mapStateToProps = (state) => {
    const { ClashRoyaleDeckReducer } = state;
    return {
        popularDecks: ClashRoyaleDeckReducer.decks.popularDecks
    };
};

export default connect(mapStateToProps, {
    fetchPopularDecksAction: fetchPopularDecks,
})(ClashRoyaleDecks);
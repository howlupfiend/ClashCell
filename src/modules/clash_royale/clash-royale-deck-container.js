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
                {popularDecks.map((deck, index) => (
                    <DeckCard 
                        deck={deck}
                        index={index}> 
                    </DeckCard>
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
    },
    contentText: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 25,
    }
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
import React from 'react';
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'

import { fetchPopularDecks } from './actions/deck-list-actions'

class ClashRoyaleDecks extends React.Component {
    componentDidMount(){
        const { fetchPopularDecksAction } = this.props;
        fetchPopularDecksAction();
    }

    render() {
        const {
            cards
        } = this.props;

        return(
            <SafeAreaView>
                <View>
                    <Text>Highest WinRate Decks</Text>
                    <Text>{cards}</Text> 
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    const { ClashRoyaleDeckReducer } = state;
    return {
        cards: ClashRoyaleDeckReducer.decks.cards
    }
}

export default connect(mapStateToProps, {
    fetchPopularDecksAction: fetchPopularDecks,
})(ClashRoyaleDecks);
import React from 'react';
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'

class ClashRoyaleDecks extends React.Component {
    render() {
        return(
            <SafeAreaView>
                <View>
                    <Text>Highest WinRate Decks</Text> 
                </View>
            </SafeAreaView>
        );
    }
}

export default ClashRoyaleDecks
import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native'

export const DeckCard =({
    deck
}) => {
    var elixirCollector = []

    calculateAverageElixir = () => {
        let averageElixir = 0
        elixirCollector.map((elixirCost) => {
            averageElixir += elixirCost
        });
        
        averageElixir = Math.round((averageElixir /= elixirCollector.length)).toFixed(1)
        return <Text>{averageElixir}</Text>
    };

    return(

        <View style={styles.containerText}>
            {
                deck.map((card, i) => {
                    elixirCollector.push(card.elixir)

                    return (
                    <Image
                        key = {i}
                        style={{width: 75, height: 100, margin: 7}}
                        source={{uri: card.icon}}
                    />
                    );
                })
            }
             <Text style={styles.cardContent}>Average Elixir: {calculateAverageElixir()}</Text>
        </View>

    );
}
    
const styles = StyleSheet.create({
    containerHeader: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
    },
    containerText: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        padding: 10
    },
    cardContent: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
    }
  });


export default DeckCard;
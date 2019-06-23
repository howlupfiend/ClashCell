import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native'

export const DeckCard =({
    deck, index
}) => {
    console.log(deck)
    
    var elixirCollector = []

    calculateAverageElixir = () => {
        let averageElixir = 0
        elixirCollector.map((elixirCost) => {
            averageElixir += elixirCost
        });
        
        averageElixir = Math.round((averageElixir /= elixirCollector.length)).toFixed(1)
        console.log("sum of elixir", averageElixir)
        return <Text>{averageElixir}</Text>
    };

    return(
        <View style={styles.contentContainer}>
            <Text style={styles.containerHeader}>Deck {index + 1}</Text>
            <View  style={styles.containerText}>
            {
                deck.map((card) => {
                    elixirCollector.push(card.elixir)
                    console.log(card.icon)

                    return (
                    <Image
                        style={{width: 75, height: 100, margin: 7}}
                        source={{uri: card.icon}}
                    />
                    );
                })
            }
            </View>
            <Text style={styles.cardContent}>Average Elixir: {calculateAverageElixir()}</Text>
        </View>

    );
}
    
const styles = StyleSheet.create({
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
    containerHeader: {
        fontWeight: "bold",
        textAlign: "center",
    },
    containerText: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        padding: 10
    },
    cardContent: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    }
  });


export default DeckCard;
export default function deckTransformer(
    values
) {
    // console.log("fking shit", values)
    const popularDecks = values.map((value) => {value
        // console.log("value", value)
        
        return value.cards
    })

    return {
        popularDecks,
    };
}
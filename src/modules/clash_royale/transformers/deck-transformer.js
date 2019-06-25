export default function deckTransformer(
    values
) {
    const popularDecks = values.map((value) => {value
        return value.cards
    })

    return {
        popularDecks,
    };
}
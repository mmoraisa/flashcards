import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { white, blue, black, gray } from '../helpers/Colors';

function Deck ({ deck, showDeck }){
    return (
        <TouchableOpacity
            style={{ height: 100 }}
            activeOpacity={.8}
            onPress={() => showDeck(deck) }
        >
            <View style={styles.deck}>
                <Text style={styles.deckTitle}>
                    {deck.title}
                </Text>
                <Text style={styles.deckQuestionsCount}>{deck.questions.length} cards</Text>
            </View>
        </TouchableOpacity>
    )
}

export default DeckList = ({ decks, showDeck }) => {
    return (
        <View style={styles.deckList}>
            {
                Object.keys(decks).map(deck =>
                    (<Deck key={deck} deck={decks[deck]} showDeck={showDeck} />))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    deckList: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    deck: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: white,
        height: 30,
        borderBottomWidth: 1,
        borderColor: blue
    },
    deckTitle: {
        fontSize: 24,
        color: black,
        textAlign: 'center'
    },
    deckQuestionsCount: {
        fontSize: 16,
        color: gray,
        textAlign: 'center'
    }
})
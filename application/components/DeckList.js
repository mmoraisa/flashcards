import React from 'react'
import { TouchableOpacity, View, ScrollView, Text, StyleSheet } from 'react-native'
import { white, blue, black, gray, lightblue } from '../helpers/Colors';
import CardCount from './CardCount';

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
                <CardCount countTo={deck.questions.length} style={styles.deckQuestionsCount}/>
            </View>
        </TouchableOpacity>
    )
}

function noDecks (){
    return (
        <View style={styles.noDecks}>
            <Text style={styles.noDecksText}>
                No decks created yet
            </Text>
        </View>
    )
}

export default DeckList = ({ navigation, decks, showDeck }) => {
    const deckList = Object.keys(decks)
    if(deckList.length == 0){
        return noDecks(navigation)
    } else{
        return (
            <ScrollView style={styles.deckList}>
                {
                    deckList.map(deck => {
                        return (<Deck key={deck} deck={decks[deck]} showDeck={showDeck} />)
                    })
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    deckList: {
        flex: 1
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
    },
    noDecks: {
        flex: 1,
        justifyContent: 'center',
    },
    noDecksText: {
        textAlign: 'center',
        fontSize: 16
    }
})
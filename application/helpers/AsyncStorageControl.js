import { AsyncStorage } from 'react-native'
import { FLASHCARDS_STORAGE_KEY } from './Config'

const INITIAL_DECKS = {}

function setInitialDecks() {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
        .then((decks) => {
            //if(decks) AsyncStorage.clear()
            if(!decks)
                return saveDecks(INITIAL_DECKS)
        })
}

function getDecks() {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
        .then(JSON.parse)
}

function addDeckToStorage(deck){
    return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
        [deck.title]: deck
    }))
}

function saveDecks(decks){
    return AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(decks))
}

async function addCardToDeck(card,deck){
    deck.questions.push(card)
    return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
        [deck.title]: deck,
    }))
}

export { getDecks, addDeckToStorage, setInitialDecks, addCardToDeck }
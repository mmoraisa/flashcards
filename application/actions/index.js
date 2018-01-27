import { AsyncStorage } from 'react-native'
import { FLASHCARDS_STORAGE_KEY } from '../helpers/Config'
import { ADD_CARD, ADD_DECK, LOAD_DECKS } from '../actions/actionTypes'

function addCard(card,deck){
    return {
        type: ADD_CARD,
        deck,
        card
    }
}

function addDeck(deck){
    return {
        type: ADD_DECK,
        deck
    }
}

function loadDecks(state){
    return {
        type: LOAD_DECKS,
        state
    }
}

export { addCard, addDeck, loadDecks }
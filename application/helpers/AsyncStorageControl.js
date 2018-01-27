import { AsyncStorage } from 'react-native'
import { FLASHCARDS_STORAGE_KEY } from './Config'

const INITIAL_DECKS = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}

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

function addDeck(deck){
    return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(deck))
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

export { getDecks, addDeck, setInitialDecks, addCardToDeck }
import { ADD_CARD, ADD_DECK, LOAD_DECKS } from '../actions/actionTypes'

const INITIAL_STATE = {}

function decksReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case ADD_CARD:
            return {
                ...state,
                [action.title]: {
                    ...state[action.title],
                    questions: [
                        ...state[action.title]['questions'],
                        action.card
                    ]
                }
            }
        case ADD_DECK:
            if(state.hasOwnProperty(action.deck.title)){
                return state
            } else{
                return {
                    ...state,
                    [action.deck.title]: action.deck
                }
            }
        case LOAD_DECKS:
            return action.state
        default:
            return state
    }
}

export default decksReducer
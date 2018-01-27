import { ADD_CARD, ADD_DECK, LOAD_DECKS } from '../actions/actionTypes'

const INITIAL_STATE = {}

function decksReducer(state = INITIAL_STATE, action){
    const { deck, card } = action

    switch(action.type){
        case ADD_CARD:
            return {
                ...state,
                [deck.title]: {
                    ...state[deck.title],
                    questions: [
                        ...state[deck.title]['questions'],
                        card
                    ]
                }
            }
        case ADD_DECK:
            if(state.hasOwnProperty(deck.title)){
                return state
            } else{
                return {
                    ...state,
                    [deck.title]: deck
                }
            }
        case LOAD_DECKS:
            return action.state
        default:
            return state
    }
}

export default decksReducer
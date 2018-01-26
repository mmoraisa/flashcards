import React from 'react'

import { StackNavigator } from 'react-navigation'

import Home from '../screens/Home';
import DeckDetails from '../screens/DeckDetails';
import Quiz from '../screens/Quiz';
import AddCard from '../screens/AddCard';

import { blue, lightblue, white, darkgray } from '../helpers/Colors';

const Stack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    DeckDetails: {
        screen: DeckDetails
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            title: 'Quiz'
        }
    },
    AddCard: {
        screen: AddCard,
        navigationOptions: {
            title: 'Add Card'
        }
    }
},{
    navigationOptions: {
        headerTintColor: white,
        headerStyle: {
            backgroundColor: darkgray
        }
    }
})

export default Stack
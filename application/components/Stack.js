import React from 'react'
import { StackNavigator } from 'react-navigation'
import Home from '../screens/Home';
import DeckDetails from '../screens/DeckDetails';
import { blue, lightblue, white } from '../helpers/Colors';

const Stack = StackNavigator({
    Home: {
        screen: Home
    },
    DeckDetails: {
        screen: DeckDetails
    }
},{
    navigationOptions: {
        headerTintColor: white,
        headerStyle: {
            backgroundColor: blue
        }
    }
})

export default Stack
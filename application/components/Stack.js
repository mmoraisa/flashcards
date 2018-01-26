import React from 'react'
import { StackNavigator } from 'react-navigation'
import Home from '../screens/Home';
import DeckDetails from '../screens/DeckDetails';
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
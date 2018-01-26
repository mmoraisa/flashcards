import { TabNavigator } from 'react-navigation'

import Decks from '../screens/Decks'
import NewDeck from '../screens/NewDeck'

import { white, blue, darkgray, lightblue } from '../helpers/Colors'

const Menu = TabNavigator({
    Decks: {
        screen: Decks,
        navigationOptions: {
            tabBarLabel: 'Decks'
        }
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'New Deck'
        }
    }
},{
    tabBarOptions: {
        activeTintColor: lightblue,
        inactiveTintColor: blue,
        indicatorStyle: {
            backgroundColor: lightblue
        },
        style: {
            backgroundColor: darkgray,
            shadowColor: 'rgba(0,0,0,.3)',
            shadowOffset: {
                width:0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
})

export default Menu
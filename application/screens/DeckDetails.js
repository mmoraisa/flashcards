import React, { Component } from 'react'
import { View, Text } from 'react-native'

class DeckDetails extends Component{
    render () {
        const { deck } = this.props.navigation.state.params

        return (
            <View>
                <Text>{deck.title}</Text>
            </View>
        )
    }
}

export default DeckDetails
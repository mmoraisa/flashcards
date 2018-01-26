import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ScreensStyleSheet from '../helpers/ScreensStyleSheet';

class Decks extends Component{
    render () {
        return (
            <View style={ScreensStyleSheet.body}>
                <Text>Decks</Text>
            </View>
        )
    }
}

export default Decks
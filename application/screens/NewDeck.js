import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ScreensStyleSheet from '../helpers/ScreensStyleSheet';

class NewDeck extends Component{
    render () {
        return (
            <View style={ScreensStyleSheet.body}>
                <Text>NewDeck</Text>
            </View>
        )
    }
}

export default NewDeck
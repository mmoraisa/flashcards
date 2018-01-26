import React, { Component } from 'react'
import { View, Text } from 'react-native'

import StatusBar from '../components/FlashStatusBar'
import { black } from '../helpers/Colors';
import Stack from '../components/Stack';

class Main extends Component {
    render () {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor={black}
                    barStyle='light-content'
                />
                <Stack />
            </View>
        )
    }
}

export default Main
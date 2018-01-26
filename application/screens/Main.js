import React, { Component } from 'react'
import { View, Text } from 'react-native'

import Menu from '../components/Menu'
import StatusBar from '../components/FlashStatusBar'
import { black } from '../helpers/Colors';

class Main extends Component {
    render () {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor={black}
                    barStyle='light-content'
                />
                <Menu />
            </View>
        )
    }
}

export default Main
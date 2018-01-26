import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ScreensStyleSheet from '../helpers/ScreensStyleSheet';
import { getDecks } from '../actions/index';
import DeckList from '../components/DeckList';

class Decks extends Component{

    state = {
        decks: []
    }

    componentWillMount () {
        this.setState({
            decks: getDecks()
        })
    }

    render () {

        const { decks } = this.state

        return (
            <View style={ScreensStyleSheet.body}>
                <DeckList decks={decks} />
            </View>
        )
    }
}

export default Decks
import React, { Component } from 'react'
import { Text, View, AsyncStorage } from 'react-native'
import ScreensStyleSheet from '../helpers/ScreensStyleSheet'
import { getDecks, setInitialDecks } from '../helpers/AsyncStorageControl'
import DeckList from '../components/DeckList'
import { FLASHCARDS_STORAGE_KEY } from '../helpers/Config';

import { connect } from 'react-redux'
import { loadDecks } from '../actions'

class Decks extends Component{

    componentWillMount () {
        const { loadDecks } = this.props
     
        setInitialDecks()
            .then(getDecks)
            .then(loadDecks)
            .catch((err) => console.log(err))
    }

    showDeck = (deck) => {
        const { stack } = this.props.screenProps
        stack.navigate('DeckDetails', { deck })
    }

    render () {
        const { decks } = this.props

        return (
            <View style={ScreensStyleSheet.body}>
                <DeckList decks={decks} showDeck={this.showDeck}/>
            </View>
        )
    }
}

function mapStateToProps(decks){
    return {
        decks
    }
}

export default connect(mapStateToProps,{
    loadDecks
})(Decks)
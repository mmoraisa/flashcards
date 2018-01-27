import React, { Component } from 'react'
import { connect } from 'react-redux'

import { View, AsyncStorage } from 'react-native'

import DeckList from '../components/DeckList'

import { getDecks, setInitialDecks } from '../helpers/AsyncStorageControl'
import { loadDecks } from '../actions'

import ScreensStyleSheet from '../helpers/ScreensStyleSheet'

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
        stack.navigate('DeckDetails', { deckTitle: deck.title })
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
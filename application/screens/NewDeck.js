import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import ScreensStyleSheet from '../helpers/ScreensStyleSheet'
import { white, darkgray } from '../helpers/Colors'
import { addDeckToStorage } from '../helpers/AsyncStorageControl';
import { addDeck } from '../actions'
import { connect } from 'react-redux'

class NewDeck extends Component{

    state = {
        deckTitle: ''
    }

    handleDeckTitleChange = (deckTitle) => {
        this.setState({
            deckTitle
        })
    }

    submit = () => {
        const { deckTitle } = this.state
        const { addDeck, navigation } = this.props

        if(deckTitle.length == 0){
            alert('You need to fill the deck title before submit')
            return false
        }

        const deck = { title: deckTitle, questions: [] }

        addDeckToStorage(deck)
            .then(() => {
                addDeck(deck)
                this.setState({
                    deckTitle: ''
                })
                navigation.navigate('Decks')
            })
    }

    render () {
        return (
            <View style={[ ScreensStyleSheet.body,{ backgroundColor: white } ]}>
                <Text style={styles.textDeckTitle}>What is the title of your new deck?</Text>
                <KeyboardAvoidingView style={styles.view} behavior="padding">
                    <View>
                        <TextInput
                            placeholder='Deck Title'
                            style={styles.inputDeckTitle}
                            onChangeText={this.handleDeckTitleChange}
                            value={this.state.deckTitle}
                        />
                        <TouchableOpacity
                            activeOpacity={.8}
                            style={styles.buttonSubmit}
                            onPress={this.submit}
                            >
                            <View>
                                <Text style={{ color: white, textAlign: 'center' }}>
                                    Submit
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    textDeckTitle: {
        fontSize: 36,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 40,
        marginBottom: 20,
    },
    inputDeckTitle: {
        marginLeft: 40,
        marginRight: 40,
        padding: 10
    },
    buttonSubmit: {
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 15,
        marginTop: 30,
        borderRadius: 5,
        padding: 10,
        backgroundColor: darkgray
    }
})

function mapStateToProps(){
    return {}
}

export default connect(mapStateToProps,{
    addDeck
})(NewDeck)
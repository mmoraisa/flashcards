import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

import { addCardToDeck, getDecks } from '../helpers/AsyncStorageControl'
import { loadDecks, addCard } from '../actions'

import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import { white, darkgray } from '../helpers/Colors'

class AddCard extends Component{

    state = {
        question: '',
        answer: ''
    }

    handleQuestionChange = (question) => {
        this.setState({
            question
        })
    }

    handleAnswerChange = (answer) => {
        this.setState({
            answer
        })
    }

    submit = () =>{
        const { question, answer } = this.state
        const { navigation, loadDecks, addCard } = this.props
        const { deck } = navigation.state.params
        
        const card = { question, answer }

        addCardToDeck(card, deck)
            .then(() => {
                addCard(card, deck)
                navigation.dispatch(NavigationActions.back())
            })
            .catch((err) => console.log(err))
    }

    render () {
        return (
            <View>
                <View
                    style={[ styles.input, { marginTop: 40 }]}>
                    <TextInput
                        placeholder='Question'
                        style={{ padding: 10 }}
                        onChangeText={this.handleQuestionChange}
                    />
                </View>
                <View
                    style={styles.input}>
                    <TextInput
                        placeholder='Answer'
                        style={{ padding: 10 }}
                        onChangeText={this.handleAnswerChange}
                    />
                </View>
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
        )
    }
}

const styles = StyleSheet.create({
    input: {
        marginTop: 20,
        marginLeft: 40,
        marginRight: 40
    },
    buttonSubmit: {
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 15,
        marginTop: 50,
        borderRadius: 5,
        padding: 10,
        backgroundColor: darkgray
    }
})

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps,{
    loadDecks,
    addCard
})(AddCard)
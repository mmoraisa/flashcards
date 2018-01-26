import React, { Component } from 'react'
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

    submit = () => {
        const { question, answer } = this.state

        alert(question)
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
                        <Text style={{ color: white }}>
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

export default AddCard
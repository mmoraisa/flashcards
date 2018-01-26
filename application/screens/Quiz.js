import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { red, green, white, darkgray, black } from '../helpers/Colors';

class Quiz extends Component{

    state = {
        currentQuestion: null,
        showingAnswer: false,
        result: [],
        finished: false,
        hasNoCards: false
    }

    componentDidMount(){
        const { deck } = this.props.navigation.state.params
        this.setState({
            currentQuestion: deck.questions.length > 0 ? 0 : null,
            showingAnswer: false,
            result: [],
            finished: false,
            hasNoCards: deck.questions.length === 0
        })
    }

    toggleAnswer = () => {
        this.setState(prevState => {
            return {
                showingAnswer: !prevState.showingAnswer
            }
        })
    }

    reportAnswer = (correct) => {
        const { deck } = this.props.navigation.state.params
        this.setState(prevState => {
            return {
                currentQuestion: prevState.currentQuestion + 1 >= deck.questions.length
                                    ? null
                                    : prevState.currentQuestion + 1,
                result: prevState.result.concat([
                    {
                        question: prevState.currentQuestion,
                        correct
                    }
                ]),
                showingAnswer: false,
                finished: prevState.currentQuestion + 1 >= deck.questions.length
            }
        })
    }

    restartQuiz = () => {
        this.setState({
            currentQuestion: 0,
            showingAnswer: false,
            result: [],
            finished: false
        })
    }

    render () {
        const { navigation } = this.props
        const { deck } = navigation.state.params
        const { currentQuestion, showingAnswer, finished, result } = this.state

        return (
            <View>
                {
                    finished
                    ? (
                        <View>
                            <View style={styles.scoreInfo}>
                                <Text style={styles.scoreText}>Score</Text>
                                <Text style={styles.score}>{ result.filter(_ => _.correct).length }/{ deck.questions.length }</Text>
                            </View>
                            <TouchableOpacity
                                activeOpacity={.8}
                                style={[ styles.button, { borderColor: darkgray, borderWidth: 1 } ]}
                                onPress={this.restartQuiz} >
                                <View>
                                    <Text style={{ textAlign: 'center' }}>
                                        Restart Quiz
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={.8}
                                style={[ styles.button,{ backgroundColor: darkgray }]}
                                onPress={() => { navigation.dispatch(NavigationActions.back()) }} >
                                <View>
                                    <Text style={{ color: white, textAlign: 'center' }}>
                                        Back to Deck
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                    : (
                        <View>
                            <Text style={styles.questionsCount}>{currentQuestion + 1}/{deck.questions.length}</Text>
                            <View style={styles.questionInfo}>
                                <Text style={styles.questionAndAnswer}>
                                    { 
                                        currentQuestion !== null && 
                                        (
                                            showingAnswer
                                            ? deck.questions[currentQuestion].answer
                                            : deck.questions[currentQuestion].question
                                        )
                                    }
                                </Text>
                                <TouchableOpacity
                                    activeOpacity={.8}
                                    onPress={this.toggleAnswer} >
                                    <Text style={styles.buttonToggleAnswer}>{(showingAnswer ? 'Question' : 'Answer')}</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                activeOpacity={.8}
                                style={[ styles.button,{ backgroundColor: green }]}
                                onPress={() => { this.reportAnswer(true) }} >
                                <View>
                                    <Text style={{ color: white, textAlign: 'center' }}>
                                        Correct
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={.8}
                                style={[ styles.button,{ backgroundColor: red }]}
                                onPress={() => { this.reportAnswer(false) }} >
                                <View>
                                    <Text style={{ color: white, textAlign: 'center' }}>
                                        Incorrect
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    scoreInfo: {
        justifyContent: 'center',
        height: 330
    },
    scoreText: {
        fontSize: 36,
        textAlign: 'center',
        marginBottom: 10,
        color: black
    },
    score: {
        fontSize: 30,
        textAlign: 'center',
        color: darkgray,
        fontWeight: 'bold'
    },
    questionAndAnswer: {
        textAlign: 'center',
        fontSize: 26,
        marginLeft: 20,
        marginRight: 20,
    },
    questionInfo: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 330
    },
    buttonToggleAnswer: {
        marginTop: 20,
        fontSize: 20,
        color: red
    },
    questionsCount: {
        fontSize: 20,
        margin: 20
    },
    button: {
        marginLeft: 80,
        marginRight: 80,
        marginBottom: 15,
        borderRadius: 5,
        padding: 10
    }
})

export default Quiz
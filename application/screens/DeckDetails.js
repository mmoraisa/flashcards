import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { darkgray, gray, white } from '../helpers/Colors'
import CardCount from '../components/CardCount'
import { FontAwesome, Entypo } from '@expo/vector-icons'

class DeckDetails extends Component{
    static navigationOptions = ({ navigation }) => {
        const { deck } = navigation.state.params
        return { title: deck.title }
    }

    render () {
        const { navigation } = this.props
        const { deck } = navigation.state.params

        return (
            <View>
                <View style={styles.deckInfo}>
                    <Text style={styles.deckTitle}>{deck.title}</Text>
                    <CardCount countTo={deck.questions.length} style={styles.deckQuestionsCount}/>
                </View>
                <TouchableOpacity
                    activeOpacity={.8}
                    style={styles.button}
                >
                    <View>
                        <Text>
                            <FontAwesome name='plus' />{'  '}
                            Add Card
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={.8}
                    style={[ styles.button,{ backgroundColor: darkgray }]}
                    onPress={() => navigation.navigate('Quiz', { deck })}
                >
                    <View>
                        <Text style={{ color: white }}>
                            <Entypo name='new-message' />{'  '}
                            Start Quiz
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deckInfo: {
        height: 400,
        justifyContent: 'center'
    },
    deckTitle: {
        fontSize: 26,
        textAlign: 'center',
        color: darkgray
    },
    deckQuestionsCount: {
        fontSize: 18,
        textAlign: 'center',
        color: gray
    },
    button: {
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: gray,
        borderRadius: 5,
        padding: 10
    }
})

export default DeckDetails
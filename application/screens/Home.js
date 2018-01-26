import React, { Component } from 'react'
import Menu from '../components/Menu';

class Home extends Component{
    static navigationOptions = ({ navigation }) => {
        return { header: null }
    }

    render () {
        const { navigation } = this.props
        return (
            <Menu screenProps={{ stack: navigation }}/>
        )
    }
}

export default Home
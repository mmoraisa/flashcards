import React, { Component } from 'react'
import Menu from '../components/Menu';

class Home extends Component{
    render () {
        const { navigation } = this.props
        return (
            <Menu screenProps={{ stack: navigation }}/>
        )
    }
}

export default Home
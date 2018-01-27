import React from 'react'
import Main from './application/screens/Main'
import decksReducer from './application/reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

export default class App extends React.Component {
  render() {

    store = createStore(decksReducer)

    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
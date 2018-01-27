import React from 'react'
import Main from './application/screens/Main'
import decksReducer from './application/reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

export default class App extends React.Component {
  render() {

    store = createStore(decksReducer,applyMiddleware(logger,thunk))

    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
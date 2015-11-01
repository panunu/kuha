import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux/native';
import thunk from 'redux-thunk';

import Nav from './Nav';
import Main from './Main';

// TODO: Somehow index.js does not work.
import * as reducers from '../reducers/DataReducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Nav initialRoute={{ component: Main }} />}
      </Provider>
    );
  }
}

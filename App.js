import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducer from './components/store/reducer';
import thunk from 'redux-thunk';

import AppNavigation from './components/navigation/AppNavigation';

const store = createStore(reducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
        <AppNavigation />
    </Provider>
  )
}

import 'babel-polyfill'
import ReactDOM from 'react-dom'
import React from 'react'
import App from './components/App'
import {createStore} from 'redux'
import allReducers from './reducers'
import {Provider} from 'react-redux'
const store = createStore(allReducers);

ReactDOM.render(    
    <Provider store={store}>
        <App />
    </Provider>,document.getElementById('root')
);
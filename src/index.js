import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './containers/App'
import 'todomvc-app-css/index.css'
import './index.css'

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
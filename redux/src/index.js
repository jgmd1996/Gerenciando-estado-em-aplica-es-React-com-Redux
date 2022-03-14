import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Rotas from './Rotas'

import App from './App'

import { store } from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Rotas />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
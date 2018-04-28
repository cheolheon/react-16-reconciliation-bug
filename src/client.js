import React from 'react'
import ReactDOM from 'react-dom'

import App from './components'

const ReactApp =  (
  <App />
)

ReactDOM.hydrate(
  ReactApp,
  document.getElementById('app'),
)

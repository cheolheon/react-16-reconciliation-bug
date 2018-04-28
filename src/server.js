import path from 'path'

import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'

import App from './components'

const app = express()

app.use(express.static(__dirname))

app.get('*', (req, res) => {
  const ReactApp = (
    <App />
  )
  const appString = ReactDOM.renderToString(ReactApp)

  res.status(200).send(
    `<!DOCTYPE html>
    <html className="no-js" lang="en">
      <head>
        <meta charset="utf-8">
        <title>React 16 Reconciliation bug with client hydration</title>
      </head>
      <body>
        <div id="app">
          ${appString}
        </div>
        <script src="client.js"></script>
      </body>
    </html>`
  )
})

const port = 3000

app.listen(port, () => {
  console.log(`Server is on! http://localhost:${port}`)
})

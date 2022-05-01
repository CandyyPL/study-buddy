import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from 'views/Root/Root.jsx'
import { worker } from 'mocks/browser'

const root = ReactDOM.createRoot(document.getElementById('root'))

worker.start().then(() => {
  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  )
})

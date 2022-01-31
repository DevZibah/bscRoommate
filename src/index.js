import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import RecommendContextProvider from './contexts/RecommendContext'

ReactDOM.render(
  // <RecommendContextProvider>
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  // </RecommendContextProvider>,
  document.getElementById('root')
)

import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/configureStore'
import App from './components/App'
import ErrorBoundary from './components/ErrorBoundary'
import './index.css'

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
)

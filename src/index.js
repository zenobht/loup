import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/configureStore'
import './index.css'

const App = () => {
  return <div className="root">Hello World</div>
}

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

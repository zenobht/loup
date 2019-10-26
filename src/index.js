import React from 'react'
import ReactDom from 'react-dom'

import './index.css'

const App = () => {
  return <div className="root">Hello World</div>
}

ReactDom.render(<App />, document.getElementById('root'))

import React from 'react'
import { node } from 'prop-types'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error)
  }

  render() {
    if (this.state.hasError) {
      return <div>Error</div>
    } else {
      return this.props.children
    }
  }
}

ErrorBoundary.propTypes = {
  children: node,
}

export default ErrorBoundary

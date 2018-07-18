import React, { Component } from 'react'
import Display from './Display'

class App extends Component {
  state = { shown: 1, dir: '' }
  
  render() {
    const { shown, dir } = this.state
    return (
      <Display shown={shown} dir={dir} />
    )
  }
}

export default App

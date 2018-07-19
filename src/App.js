import React, { Component, Fragment } from 'react'
import Display from './Display'
import Navbar from './Navbar'

class App extends Component {

  render() {
    return (
      <Fragment>
        <Navbar />
        <Display />
      </Fragment>
    )
  }
}

export default App

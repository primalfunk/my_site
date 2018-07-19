import React, { Fragment } from 'react'
import { Divider, Container } from 'semantic-ui-react'
import Display from './Display'
import Navbar from './Navbar'

class App extends React.Component {

  render() {
    return (
      <div style={styles.background}>
        <Navbar />
        <Divider hidden />
        <Display />
      </div>
    )
  }
}

const styles = {
  background: {
    backgroundColor: "black",
    minHeight: "100vh"
  }
}

export default App

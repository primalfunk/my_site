import React, { Component } from 'react'
import { Container, Divider, Button, Grid, Image } from 'semantic-ui-react'
import styled, { keyframes } from 'styled-components'
import Display from './Display'
import right from './rightarrow.png'
import left from './leftarrow.png'

class App extends Component {
  state = { shown: 1, dir: '' }

  handleRight(i) {
    let new_shown
    const shown = i
    if(shown === 1 || shown === 2) {
      new_shown = shown + 1
    } else {
      new_shown = 1
    }
    this.setState({ shown: new_shown, dir: 'right' })
  }

  handleLeft(i) {
    let new_shown
    const shown = i
    if (shown === 2 || shown === 3) {
      new_shown = shown - 1
    } else {
      new_shown = 3
    }
    this.setState({ shown: new_shown, dir: 'left' })
  }

  render() {
    const { shown, dir } = this.state
    return (
      <MyContainer>
        <Divider />
          <Grid columns={3} padded>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
                <Button
                  onClick={() => this.handleLeft(shown)}>
                  <Image src={left} size="mini" />
                </Button>
              </Grid.Column>
              <Grid.Column style={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
                <Display shown={shown} dir={dir} /> 
              </Grid.Column>
              <Grid.Column style={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
                <Button
                  onClick={() => this.handleRight(shown)}>
                  <Image src={right} size="mini" />
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        <Divider />
        
      </MyContainer>
    )
  }
}

const MyContainer = styled(Container)`
  background-color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default App

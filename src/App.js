import React, { Component } from 'react'
import { Container, Divider, Button, Grid, Image } from 'semantic-ui-react'
import styled, { keyframes } from 'styled-components'
import Display from './Display'
import right from './rightarrow.png'
import left from './leftarrow.png'

class App extends Component {
  state = { shown: 1, dir: '' }

  handleSlide(i, dir) {
    let new_shown
    const shown = i
    if(dir == 'right') {
      if(shown === 1 || shown === 2) {
        new_shown = shown + 1
      } else {
        new_shown = 1
      }
    } else {
      if (shown === 2 || shown === 3) {
        new_shown = shown - 1
      } else {
        new_shown = 3
      }
    }
    this.setState({ shown: new_shown, dir: dir })
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
                  onClick={() => this.handleSlide(shown, 'left')}>
                  <Image src={left} size="mini" />
                </Button>
              </Grid.Column>
              <Grid.Column style={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
                
                <Display shown={shown} dir={dir} />

              </Grid.Column>
              <Grid.Column style={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
                <Button
                  onClick={() => this.handleSlide(shown, 'right')}>
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

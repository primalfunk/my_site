import React, { Component } from 'react'
import { Container, Divider, Button, Grid, Image } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Container textAlign='center' style={{ 'background': 'gray', 'padding': '150px' }}>
        <Grid columns={3}>
          <Grid.Column>
          
          </Grid.Column>
          <Grid.Column>
            <Divider />
            <Button>Back</Button>
            <Button>This</Button>
            <Button >Further</Button>
          </Grid.Column>
          <Grid.Column>
          
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default App

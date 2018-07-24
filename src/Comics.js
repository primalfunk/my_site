import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

class Comics extends React.Component {
  state = { comics: [] }
  render() {
    return (
      <div style={{backgroundColor: "white"}}>
        <Segment raised style={{height: "30vh"}}>
          <Segment raised>
          <Header>Nothing here yet...</Header>
          </Segment>
        </Segment>
      </div>
    )
  }
}

export default Comics
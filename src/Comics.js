import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

class Comics extends React.Component {
  state = { comics: [] }
  render() {
    return (
      <div style={{backgroundColor: "white"}}>
        <Segment raised style={{height: "30vh"}}>
          <Segment raised>
          <Header>Use the ComicVine API to do something cool!</Header>
          </Segment>
        </Segment>
      </div>
    )
  }
}

export default Comics
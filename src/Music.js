import React from 'react'
import { Card, Dimmer, Divider, Dropdown, Header, Loader, Segment } from 'semantic-ui-react'
import ReactAudioPlayer from 'react-audio-player'
import song1 from './sonata2-4.mp3'
import song2 from './sonata3-1.mp3'
import song3 from './sonata4-3.mp3'
import styled from '../node_modules/styled-components'
import back from './webback.png'

class Music extends React.Component {
  state = { song: {} }

  handleChange = (e, data) => {
    this.setState({ song: data.value })
  }

  render() {
    const { song } = this.state
    return (
      <MusicWrapper>
        <Segment>
          <Header>Listen to a few of my piano compositions (selection below will autoplay):</Header>
            <Divider hidden />
            <Dropdown placeholder="Select a song:" fluid selection options={ options } onChange={ this.handleChange } />
            <Divider hidden/>
            <ReactAudioPlayer src={song} controls autoPlay="true"/>
        </Segment>
      </MusicWrapper>
    )
  }
}

const options = [
  {
    text: '"Rondo" from Piano Sonata No. 2',
    value: song1
  },
  { 
    text: '"Cantabile" from Piano Sonata No. 3',
    value: song2
  },
  { 
    text: '"Scherzo" from Piano Sonata No. 4',
    value: song3
  }
]

const MusicWrapper = styled.div`
  width: 60vw;
`

export default Music

import React from 'react'
import { Image } from 'semantic-ui-react'
import styled, { keyframes } from 'styled-components'
import { fadeInLeft, fadeOutLeft, fadeInRight, fadeOutRight } from 'react-animations'

class Display extends React.Component {

  render() {
    const shown = this.props.shown
    return(
      <Image src={require(`./medallion${shown}.png`)} />
    )
  }
}

const enterLeftAnimation = keyframes`${fadeInLeft}`
const leaveLeftAnimation = keyframes`${fadeOutLeft}`
const enterRightAnimation = keyframes`${fadeInRight}`
const leaveRightAnimation = keyframes`${fadeOutRight}`

const EnterLeft = styled.div`
  align-self: center;
  animation: 2s ${enterLeftAnimation};
  background-color: white;
`

const LeaveLeft = styled.div`
  align-self: center;
  animation: 2s ${leaveLeftAnimation};
  background-color: white;
`

const EnterRight = styled.div`
  align-self: center;
  animation: 2s ${enterRightAnimation};
  background-color: white;
`

const LeaveRight = styled.div`
  align-self: center;
  animation: 2s ${leaveRightAnimation};
  background-color: white;
`

export default Display

import React from 'react'
import { Container, Divider, Button, Grid, Image } from 'semantic-ui-react'
import styled, { keyframes } from 'styled-components'
import right from './rightarrow.png'
import left from './leftarrow.png'

class Display extends React.Component {
  state = { shown: 1, dir: '', out: false }
  
  handleSlide(i, dir) {
    let new_shown
    const shown = i
    if (dir === 'right') {
      (shown === 1 || shown === 2) ? new_shown = shown + 1 : new_shown = 1
    } else {
      (shown === 2 || shown === 3) ? new_shown = shown - 1 : new_shown = 3
    }
    this.setState({ out: true, dir: dir }, () =>
      setTimeout(() => this.setState({ shown: new_shown, out: false }), 750)
    )
  }

  render() {
    const { shown, dir, out } = this.state
    return(
      <FlexContainer>
        <Divider />
        <Grid columns={3} padded>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
                <Button onClick={() => this.handleSlide(shown, 'left')}>
                  <Image src={left} size="mini" />
                </Button>
            </Grid.Column>
            <Grid.Column>
              { dir === 'right' ?
                <AnimLeft out={out}>
                  <Image src={require(`./medallion${shown}.png`)} />
                </AnimLeft> :
                <AnimRight out={out}>
                  <Image src={require(`./medallion${shown}.png`)} />
                </AnimRight>
              } 
            </Grid.Column>
            <Grid.Column style={{"display": "flex", "justifyContent": "center", "alignItems": "center"}}>
                <Button onClick={() => this.handleSlide(shown, 'right')}>
                  <Image src={right} size="mini" />
                </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </FlexContainer>
    )
  }
}

const FlexContainer = styled(Container)`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const enterRight = keyframes`
  from {
    opacity: 0;
    transform: translate(300px, 0px) scale(0.3) rotate(-180deg);
  }
  to {
    opacity: 1;
    transform: translate(0px, 0px) scale(1);
  }
`
const enterLeft = keyframes`
  from {
    opacity: 0;
    transform: translate(-300px, 0px) scale(0.3) rotate(180deg);
  }
  to {
    opacity: 1;
    transform: translate(0px, 0px) scale(1);
  }
`
const leaveLeft = keyframes`
  from {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  to {
    opacity: 0;
    transform: translate(300px, 0px) scale(0.3) rotate(-180deg);
  }
`
const leaveRight = keyframes`
  from {
    opacity: 1;
    transform: translate(0px, 0px)
  }
  to {
    opacity: 0;
    transform: translate(-300px, 0px) scale(0.3) rotate(180deg);
  }
`
const AnimLeft = styled.div`
  animation: ${ props => props.out ? leaveLeft : enterLeft } 1s;
`
const AnimRight = styled.div`
  animation: ${ props => props.out ? leaveRight : enterRight } 1s;
`

export default Display

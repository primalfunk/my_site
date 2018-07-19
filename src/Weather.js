import React from 'react'
import styled from 'styled-components'
import { Divider, Grid, Header, Segment } from 'semantic-ui-react'
import axios from 'axios'

class Weather extends React.Component {
  state = { weather: [], visible: false }

  handleClick(woe) {
    console.log(`making axios get request to: https://www.metaweather.com/api/location/${woe}/`)
    axios.get(`https://www.metaweather.com/api/location/${woe}/`)
      .then( res => this.setState({ weather: res.data }))
      .catch( errors => console.log( errors.messages ))
  }

  render() {
    const { weather } = this.state
    
    return(
      <BigContainer> 
        <Divider hidden />
        <Segment style={{ "margin": "10px" }}>
        <Grid columns={2}>
          <Grid.Column>
            <Segment raised style={{ "height": "30vh" }}>
              <MyHeader>Using the metaweather.com API, get a 5-day weather forecast for one of these cities:</MyHeader>
              <ul>
                <MyLi onClick={ () => this.handleClick(2459115) }>New York</MyLi>
                <MyLi onClick={ () => this.handleClick(44418) }>London</MyLi>
                <MyLi onClick={ () => this.handleClick(1062617) }>Singapore</MyLi>
              </ul>
            </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment raised style={{"height": "30vh"}}>
                Weather data goes in here.
              </Segment>
            </Grid.Column>
          </Grid>
        </Segment>
        <Divider />
      </BigContainer>
    )
  }
}

const MyHeader = styled(Header)`
  font-size: 25px;
`

const MyLi = styled.li`
  font-weight: bold;
  font-size: 20px;
  color: blue;
  width: 100px;
  cursor: pointer;
  &:hover {
    color: lightblue;
  }
`
const BigContainer = styled.div`
  heignt: 100vh;
`


export default Weather
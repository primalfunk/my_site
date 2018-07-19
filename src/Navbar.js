import React from 'react'
import styled from 'styled-components'

class Navbar extends React.Component {
  
  render() {
    return(
    <Flexbar>
      <a href="http://www.wikipedia.com">Wikipedia</a>
      <a href="http://www.google.com">Google</a>
    </Flexbar>
    )
  }
}

const Flexbar = styled.div`
  background-color: #a7bfe5;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 15px;

`

export default Navbar
import React from 'react'
import { Image } from 'semantic-ui-react'

class Display extends React.Component {

  componentWillMount() {
    console.log(this.props)
  }
  
  render() {
    const shown = this.props.shown
    console.log(this.props)
    return(
      <Image src={require(`./medallion${shown}.png`)} />
    )
  }
}

export default Display

import React from 'react'
import SubscribersList from '@components/SubscribersList'

export default class Subscribers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: "Subscribers"
    }
  }

  render() {
    return <SubscribersList
      items={this.state.subscribers}
      navigation={this.props.navigation}  
      />
  }
}

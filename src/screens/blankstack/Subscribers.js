import React from 'react'
import SubscribersList from '@components/SubscribersList'
import Header from '@components/Header'

export default class Subscribers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: "Subscribers"
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header
          back={() => this.props.navigation.goBack()}
          screen={this.state.screen} />       
        <SubscribersList
          items={this.state.subscribers}
          navigation={this.props.navigation}/>
      </React.Fragment>
    )
  }
}

import React from 'react'
import { ScrollView } from 'react-native'
import Loading from '@components/Loading'
import Header from '@components/Header'
import Memories from '@components/Memories'
import EventInfo from '@components/EventInfo'
import store from "@store/index";
import { observer } from "mobx-react";

@observer
export default class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "Event"
    };
  }

  componentWillMount() {
    this.setState({
      user: store.user.currentUser
    })
  }

  render() {
    if (this.props) {
      const eventInfo = this.props.navigation.getParam('eventInfo', null)
      return (
        <React.Fragment>
          <Header back={() => this.props.navigation.goBack()} />
          <ScrollView style={{ backgroundColor: '#FFFFFF' }} >
            <EventInfo info={eventInfo} />
            <Memories memories={eventInfo.memories} id={eventInfo.key} navigation={this.props.navigation} />
          </ScrollView>
        </React.Fragment>
      )
    } else {
      return <Loading fullscreen={true} />
    }
  }
}

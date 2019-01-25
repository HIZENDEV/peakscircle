import React from 'react'
import {ScrollView} from 'react-native'
import Loading from '@components/Loading'
import Header from '@components/Header'
import Title from '@components/Title'
import EventsList from '@components/EventsList'
import ArchivesList from '@components/ArchivesList'
import * as auth from '@services/Auth'
import store from "@store/index";
import { observer } from "mobx-react";
@observer
export default class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "Events"
    };
  }

  componentWillMount() {
    this.setState({
      user: store.userStore.user
    })
  }
  
  navigate(route) {
    this.props.navigation.navigate(route);
  }

  render() {
      if (!store.userStore.loading && !store.eventStore.loading) {
      return (
        <React.Fragment>
          <Header search={'Search for an event or a place'} />
            <ScrollView style={{ backgroundColor: '#323160' }} >
              <Title name={"Discover"}
                add={true} 
                action={true}
                navigation={this.props.navigation}  />
              <EventsList events={store.eventStore.events} />
              <Title name={"Previous Events"} actionText={'Show more'} action={() => this.navigate("Events")} />
              <ArchivesList events={store.eventStore.events} navigation={this.props.navigation} />
            </ScrollView>
        </React.Fragment>
      )
    } else {
      return <Loading fullscreen={true} />
    }
  }
}

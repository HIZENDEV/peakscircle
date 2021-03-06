import React from 'react'
import {ScrollView} from 'react-native'
import Loading from '@components/Loading'
import Header from '@components/Header'
import Title from '@components/Title'
import EventsList from '@components/EventsList'
import ArchivesList from '@components/ArchivesList'
import store from "@store/index";
import { observer, inject } from "mobx-react";

@inject('store')
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
      user: store.user.current
    })
  }
  
  navigate(route) {
    this.props.navigation.navigate(route);
  }

  render() {
      console.log(this.props.store)
      if (!store.user.loading && !store.events.loading) {
      return (
        <React.Fragment>
          <Header search={'Search for an event or a place'} add={true} navigation={this.props.navigation} />
            <ScrollView style={{ backgroundColor: '#FFFFFF' }} >
              <Title name={"Discover"}
                action={() =>
                  this.props.store.alert.show = {
                    message: 'Service is temporarily disabled',
                    type: 'warning',
                    display: true
                  }
                }
                navigation={this.props.navigation}/>
              <EventsList events={store.events.all} uid={store.user.current.uid} navigation={this.props.navigation} />
              <Title name={"Previous Events"} actionText={'Show more'} action={() => this.navigate("Events")} />
              <ArchivesList events={store.events.all} navigation={this.props.navigation} />
            </ScrollView>
        </React.Fragment>
      )
    } else {
      return <Loading fullscreen={true} />
    }
  }
}

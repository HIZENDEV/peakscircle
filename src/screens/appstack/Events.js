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
  
  _signOut = async () => {
    try {
      await auth.signOut();
      this.props.navigation.navigate("Auth");
    } catch (e) {
      alert("Something goes wrong!");
    }
  };

  render() {
      if (!store.userStore.loading && !store.eventStore.loading) {
      return (
        <React.Fragment>
          <Header search={true} />
            <ScrollView>
              <Title name={"Discover"} add={true} action={() => this.navigate("Events")} />
              <EventsList events={store.eventStore.events} />
              <Title name={"Previous Events"} actionText={'Show more'} action={() => this.navigate("Events")} />
              <ArchivesList archives={store.eventStore.events} />
            </ScrollView>
        </React.Fragment>
      )
    } else {
      return <Loading fullscreen={true} />
    }
  }
}

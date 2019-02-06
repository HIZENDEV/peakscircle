import React from 'react'
import Loading from '@components/Loading'
import Header from '@components/Header'
import CompactList from "@components/CompactList";
import Title from '@components/Title'
import store from "@store/index";
import { observer, inject } from "mobx-react/native";
import { ScrollView } from 'react-native-gesture-handler';
import Notification from '@services/Notification'
import { userNextEvents, nextEvents } from "@services/Events"
import firebase from 'react-native-firebase'

@inject('store')
@observer
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "Home",
      isReady: false
    };
  }

  componentWillMount() {
    this.setState({ user: store.user.current })
  }

  async componentDidMount() {
    const fcmToken = await firebase.messaging().getToken()
    Notification.checkPermission();
    Notification.createNotificationListeners()
  }

  componentWillUnmount() {
    Notification.notificationListener();
    Notification.notificationOpenedListener();
  }

  navigate(route) {
    this.props.navigation.navigate(route);
  }

  add = () => {
    this.props.store.data.add('The Doctor')
  }

  render() {
    const store = this.props.store
    console.log(store)
    if (!store.survey.loading && !store.threads.loading && !store.user.loading && !store.events.loading) {
      const upcomming = userNextEvents(store.events.all, store.user.current.uid)
      return (
        <React.Fragment>
          <Header user={store.user.current} upcoming={upcomming ? upcomming.length : 0} />
          <ScrollView style={{ backgroundColor: '#FFFFFF'}}>
            {/* Events */}
            <Title name={"Events"} action={() => this.navigate("Events")} />
            <CompactList items={store.events.json} type={'events'} />
            {/* Threads */}
            <Title name={"Threads"} action={() => this.navigate("Threads")} />
            <CompactList items={store.threads.all} type={'threads'} />
            {/* Survey */}
            <Title name={"Survey"} action={() => this.add()} />
            <CompactList items={store.survey.polls} type={'survey'} />
          </ScrollView>
        </React.Fragment>)
    } else {
      return <Loading fullscreen={true} />;
    }
  }
}
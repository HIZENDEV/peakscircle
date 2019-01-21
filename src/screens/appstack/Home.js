import React from 'react'
import Loading from '@components/Loading'
import Header from '@components/Header'
import CompactList from "@components/CompactList";
import Title from '@components/Title'
import store from "@store/index";
import { observer } from 'mobx-react'
import { ScrollView } from 'react-native-gesture-handler';
import Notification from '@services/Notification'

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
    this.setState({ user: store.userStore.user });
  }

  async componentDidMount() {
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

  render() {

    if (!store.surveyStore.loading && !store.threadStore.loading && !store.userStore.loading && !store.eventStore.loading) {
      return (
        <React.Fragment>
          <Header user={store.userStore.user} upcoming={2} />
          <ScrollView style={{ backgroundColor: '#323160'}}>
            {/* Events */}
            <Title name={"Events"} action={() => this.navigate("Events")} />
            <CompactList items={store.eventStore.events} type={'events'} />
            {/* Threads */}
            <Title name={"Threads"} action={() => this.navigate("Threads")} />
            <CompactList items={store.threadStore.threads} type={'threads'} />
            {/* Survey */}
            <Title name={"Survey"} action={() => this.navigate("Profile")} />
            <CompactList items={store.surveyStore.polls} type={'survey'} />

            {/* <Button onPress={() => store.userStore.increment()} title="mosre" />
            <Text>{store.userStore.counter}</Text>
            <Button onPress={() => store.userStore.decrement()} title="less" /> */}
          </ScrollView>
        </React.Fragment>)
    } else {
      return <Loading fullscreen={true} />;
    }
  }
}
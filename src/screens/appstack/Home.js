import React from 'react'
import { SafeAreaView, View, Button, Text } from "react-native";
import Loading from '@components/Loading'
import Header from '@components/Header'
import CompactList from "@components/CompactList";
import Title from '@components/Title'
import * as auth from '@services/Auth'
import store from "@store/index";
import { observer } from 'mobx-react'

@observer
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "Home"
    };
    this._eventsRequest()
  }

  componentWillMount() {
    this.setState({ user: store.userStore.user });
  }

  componentDidMount() {}


  navigate(route) {
    this.props.navigation.navigate(route);
  }

  _eventsRequest = async () => {
   store.eventStore.loading
  };

  render() {
    if (true === false) {
      return <SafeAreaView>
          <Header user={store.userStore.user} upcoming={2} />
          <Title name={"Events"} action={() => this.navigate("Events")} />
          <CompactList events={store.eventStore.events} />
          <Title name={"Threads"} action={() => this.navigate("Threads")} />
          <CompactList events={store.threadStore.threads} />
          <Title name={"Survey"} action={() => this.navigate("Profile")} />
          <CompactList events={store.surveyStore.polls} />
          <Button onPress={() => store.userStore.increment()} title="mosre" />
          <Text>{store.userStore.counter}</Text>
          <Button onPress={() => store.userStore.decrement()} title="less" />
        </SafeAreaView>;
    } else {
      return <Loading fullscreen={true} />;
    }
  }
}
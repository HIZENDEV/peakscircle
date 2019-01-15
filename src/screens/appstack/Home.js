import React from 'react'
import { Button, Text } from "react-native";
import Loading from '@components/Loading'
import Header from '@components/Header'
import CompactList from "@components/CompactList";
import Title from '@components/Title'
import store from "@store/index";
import { observer } from 'mobx-react'
import { ScrollView } from 'react-native-gesture-handler';

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

  componentDidMount() {}


  navigate(route) {
    this.props.navigation.navigate(route);
  }

  render() {

    if (!store.surveyStore.loading && !store.threadStore.loading && !store.userStore.loading && !store.eventStore.loading) {
      return (
        <React.Fragment>
          <Header user={store.userStore.user} upcoming={2} />
          <ScrollView style={{ backgroundColor: '#323160'}}>
            <Title name={"Events"} action={() => this.navigate("Events")} />
            <CompactList events={store.eventStore.events} />
            <Title name={"Threads"} action={() => this.navigate("Threads")} />
            <CompactList events={store.threadStore.threads} />
            <Title name={"Survey"} action={() => this.navigate("Profile")} />
            <CompactList events={store.surveyStore.polls} />
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
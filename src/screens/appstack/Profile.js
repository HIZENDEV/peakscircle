import React from 'react';
import Loading from '@components/Loading';
import Header from '@components/Header';
import Title from '@components/Title';
import UserInfo from '@components/UserInfo';
import store from "@store/index";
import IncommingList from '@components/IncommingList'
import ArchivesList from '@components/ArchivesList'
import { observer } from 'mobx-react';
import { ScrollView } from 'react-native-gesture-handler';
@observer
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "Profile"
    };
    this.back = this.props.navigation.goBack();
  }
  componentWillMount() {
    this.setState({ user: store.userStore.user });
  }
  render() {
    if (!store.surveyStore.loading && !store.threadStore.loading && !store.userStore.loading && !store.eventStore.loading) {
      return (<ScrollView>
        <Header screen={this.state.screen} back={this.back} />
        <UserInfo user={this.state.user} />
        <Title name={"Incoming events"} />
        <IncommingList events={store.eventStore.events} user={true} />
        <Title name={"Previous Events"} actionText={'Show more'} action={() => this.navigate("Events")} />
        <ArchivesList events={store.eventStore.events} user={true} />
      </ScrollView>);
    }
    else {
      return <Loading fullscreen={true} />;
    }
  }
}

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
    const user = this.props.navigation.getParam('user', null)
    if (user){
      this.setState({ user: user });
    } else {
      this.setState({ user: store.userStore.user });
    }
  }

  render() {
    
    let { navigation } = this.props
    let user = navigation.getParam('user', null)
    console.warn(this.props, user)
    if (!store.surveyStore.loading && !store.threadStore.loading && !store.userStore.loading && !store.eventStore.loading) {
      return (
        <React.Fragment>
          <Header screen={this.state.screen} back={this.back} />
          <UserInfo user={user !== null ? user : this.state.user} />
          <ScrollView>
            <Title name={"Incoming events"} />
            <IncommingList events={store.eventStore.events} user={user !== null ? user.uid : this.state.user.uid} />
            <Title name={"Previous Events"} actionText={'Show more'} action={() => this.navigate("Events")} />
            <ArchivesList events={store.eventStore.events} user={user !== null ? user.uid : this.state.user.uid} />
          </ScrollView>
        </React.Fragment>);
    }
    else {
      return <Loading fullscreen={true} />;
    }
  }
}

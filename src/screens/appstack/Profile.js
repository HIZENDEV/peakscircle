import React from 'react';
import Loading from '@components/Loading';
import Header from '@components/Header';
import Title from '@components/Title';
import UserInfo from '@components/UserInfo';
import store from "@store/index";
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
        <Title name={"Next events"} />
        <Title name={"Previous events"} />
      </ScrollView>);
    }
    else {
      return <Loading fullscreen={true} />;
    }
  }
}

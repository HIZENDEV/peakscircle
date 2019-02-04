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
export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "User"
    };
  }

  componentWillMount() {
    const user = this.props.navigation.getParam('user', null)
    if (user) {
      this.setState({ user: user });
    } else {
      this.setState({ user: store.user.current });
    }
  }


  _renderIncomming = () => {
    let { navigation } = this.props
    let user = navigation.getParam('user', null)
    return <IncommingList events={store.events.all} name={this.state.user.displayName} user={this.state.user.uid} />
  }

  _renderArchives = () => {
    let { navigation } = this.props
    let user = navigation.getParam('user', null)
    return <ArchivesList events={store.events.all} name={this.state.user.displayName} user={this.state.user.uid} navigation={this.props.navigation} />
  }

  render() {
    let { navigation } = this.props
    let user = navigation.getParam('user', null)
    if (!store.survey.loading && !store.threads.loading && !store.user.loading && !store.events.loading) {
      return (
        <React.Fragment>
          <Header screen={this.state.screen} back={() => this.props.navigation.goBack()} />
          <UserInfo user={user !== null ? user : this.state.user} />
          <ScrollView style={{ backgroundColor: '#323160' }} >
            <Title name={"Incoming events"} />
            {this._renderIncomming()}
            <Title name={"Previous Events"} actionText={'Show more'} action={() => this.navigate("Events")} />
            {this._renderArchives()}
          </ScrollView>
        </React.Fragment>);
    }
    else {
      return <Loading fullscreen={true} />;
    }
  }
}

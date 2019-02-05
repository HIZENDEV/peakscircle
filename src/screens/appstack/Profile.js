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
      screen: "Profile",
      updated: false,
    };    
  }

  componentWillMount() {
    const user = this.props.navigation.getParam('user', null)
    if (user){
      this.setState({ user: user });
    } else {
      this.setState({ user: store.user.current });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.navigation.getParam('user', null) !== this.props.navigation.getParam('user', null)) {
      this.setState({updated: true})
      this.forceUpdate()
    }
  }

  _renderIncomming = () => {
    let { navigation } = this.props
    let user = navigation.getParam('user', null)
    if (this.state.updated) {
      return <IncommingList
        events={store.events.all}
        user={user.uid}
        name={user.displayName} />
    } else {
      return <IncommingList
        events={store.events.all}
        user={this.state.user.uid}
        name={this.state.user.displayName} />
    }
  }
  
  _renderArchives = () => {
    let { navigation } = this.props
    let user = navigation.getParam('user', null)
    if (this.state.updated) {
      return <ArchivesList
        events={store.events.all}
        user={user.uid}
        navigation={this.props.navigation}
        name={user.displayName} />
    } else {
      return <ArchivesList
        events={store.events.all}
        user={this.state.user.uid}
        navigation={this.props.navigation}
        name={this.state.user.displayName} />
    }
  }

  render() {
    let { navigation } = this.props
    let user = navigation.getParam('user', null)
    if (!store.survey.loading && !store.threads.loading && !store.user.loading && !store.events.loading) {
      return (
        <React.Fragment>
          <Header screen={this.state.screen} back={() => this.props.navigation.goBack()} settings={() => this.props.navigation.navigate('Settings')}/>
          <UserInfo user={user !== null ? user : this.state.user} />
          <ScrollView style={{ backgroundColor: '#FFFFFF' }} >
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

import React from 'react'
import Loading from '@components/Loading'
import Header from '@components/Header'
import Title from '@components/Title'
import UserInfo from '@components/UserInfo'
import store from "@store/index"
import IncommingList from '@components/IncommingList'
import ArchivesList from '@components/ArchivesList'
import { observer, inject } from 'mobx-react'
import { ScrollView } from 'react-native-gesture-handler'

@inject('store')
@observer
export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: "Profile",
      updated: false,
    };    
  }

  componentWillMount() {
    const user = this.props.navigation.getParam('user', null)
    if (user){
      this.setState({ user: user })
    } else {
      this.setState({ user: store.user.current })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.navigation.getParam('user', null) !== this.props.navigation.getParam('user', null)) {
      this.setState({updated: true})
      this.forceUpdate()
    }
  }

  _renderIncomming = (navigation, store) => {
    let user = navigation.getParam('user', null)
    if (this.state.updated) {
      return <IncommingList
        events={store.events.all}
        navigation={navigation}
        user={user.uid || store.user.current.uid}
        name={user.displayName || store.user.current.displayName} />
    } else {
      return <IncommingList
        events={store.events.all}
        user={this.state.user.uid}
        navigation={navigation}
        name={this.state.user.displayName} />
    }
  }
  
  _renderArchives = (navigation, store) => {
    let user = navigation.getParam('user', null)
    if (this.state.updated) {
      return <ArchivesList
        events={store.events.all}
        user={user.uid || store.user.current.uid}
        name={user.displayName || store.user.current.displayName} />
    } else {
      return <ArchivesList
        events={store.events.all}
        user={this.state.user.uid}
        name={this.state.user.displayName} />
    }
  }

  render() {
    let { navigation, store } = this.props
    let user = navigation.getParam('user', null)
    if (!store.survey.loading && !store.threads.loading && !store.user.loading && !store.events.loading) {
      return (
        <React.Fragment>
          <Header screen={this.state.screen} back={() => navigation.navigate('Events')} />
          <UserInfo user={user !== null ? user : this.state.user} navigation={this.props.navigation} />
          <ScrollView style={{ backgroundColor: '#FFFFFF' }} >
            <Title name={"Incoming events"} />
            {this._renderIncomming(navigation, store)}
            <Title name={"Previous Events"} actionText={'Show more'} action={() => this.navigate("Events")} />
            {this._renderArchives(navigation, store)}
          </ScrollView>
        </React.Fragment>);
    }
    else {
      return <Loading fullscreen={true} />
    }
  }
}

// <Header screen={this.state.screen} back={() => navigation.goBack()} settings={() => this.props.navigation.navigate('Settings')}/>
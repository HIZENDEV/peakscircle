import React from 'react'
import {SafeAreaView, View} from 'react-native'
import Loading from '@components/Loading'
import Header from '@components/Header'
import UserInfo from '@components/UserInfo'
import store from "@store/index";
import { observer } from "mobx-react";
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
    this.setState({ user: store.userStore.user })
  }

  render() {
    return <View>
        {this.state.user ? <SafeAreaView>
            <Header screen={this.state.screen} back={this.back} />
        <UserInfo user={this.state.user} />
          </SafeAreaView> : <Loading fullscreen={true} />}
      </View>;
  }
}

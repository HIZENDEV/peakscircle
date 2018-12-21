import React from 'react'
import {SafeAreaView} from 'react-native'
import Header from '@components/Header'
import UserInfo from '@components/UserInfo'
import * as auth from '@services/Auth'

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'Profile'
    }
    this.back = this.props.navigation.goBack()
  }



    render() {
      return (
        <SafeAreaView>
          <Header screen={this.state.screen} back={this.back} />
          <UserInfo user={auth.currentUser} />
        </SafeAreaView>
      );
    }
  }

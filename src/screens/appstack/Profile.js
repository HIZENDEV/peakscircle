import React from 'react'
import {SafeAreaView, View} from 'react-native'
import Loading from '@components/Loading'
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

  componentDidMount() {
    this.setState({currentUser : auth.currentUser})
  }

    render() {
      return (
        <View>
          { this.state.currentUser ? (
            <SafeAreaView>
              <Header screen={this.state.screen} back={this.back} />
              <UserInfo user={auth.currentUser} />
            </SafeAreaView>
            ) : (
            <Loading fullscreen={true} />
          )}
        </View>
      );
    }
  }

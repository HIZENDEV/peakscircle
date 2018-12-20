import React from 'react'
import {SafeAreaView, Button} from 'react-native'
import Header from '@components/Header'
import * as auth from '@services/Auth'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'Home'
    }
  }

  _signOut = async () => {
    try {
      await auth.signOut()
      this.props.navigation.navigate('Auth')
    } catch (e) {
      alert('Something goes wrong!')
    }
  }

  render() {
    return (
      <SafeAreaView>
        <Header screen={this.state.screen} back={this.props.navigation.goBack()} settings={this._signOut} />
        <Button
          onPress={this._signOut}
          title="Sign Out"
          color="#000"
        />
      </SafeAreaView>
    );
  }
}

import React from 'react'
import {View, Button} from 'react-native'
import Header from '@components/Header'
import * as auth from '@services/Auth'

export default class Threads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'Threads'
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
      <React.Fragment>
        <Header screen={this.state.screen} back={this.props.navigation.goBack()} />
        <Button
          onPress={this._signOut}
          title="Sign Out"
          color="#841584"
        />
      </React.Fragment>
    );
  }
}

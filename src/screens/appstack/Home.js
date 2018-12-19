import React from 'react'
import {View, Button} from 'react-native'
import * as auth from '@services/Auth'

export default class Home extends React.Component {

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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          onPress={this._signOut}
          title="Sign Out"
          color="#841584"
        />
      </View>
    );
  }
}

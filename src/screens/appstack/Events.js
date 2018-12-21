import React from 'react'
import {SafeAreaView, Button} from 'react-native'
import Header from '@components/Header'
import * as auth from '@services/Auth'

export default class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'Events'
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
        <Header search={true} />
      </SafeAreaView>
    );
  }
}

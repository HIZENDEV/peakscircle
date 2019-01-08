import React from 'react'
import {SafeAreaView, View} from 'react-native'
import Loading from '@components/Loading'
import Header from '@components/Header'
import * as auth from '@services/Auth'

export default class Threads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'Threads'
    }
  }

  componentDidMount() {
    this.setState({currentUser : auth.currentUser})
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
      <View>
        { this.state.currentUser ? (
        <SafeAreaView>
          <Header search={true} />
        </SafeAreaView>
        ) : (
        <Loading fullscreen={true} />
      )}
      </View>
    );
  }
}

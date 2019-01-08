import React from 'react'
import { SafeAreaView, View, StatusBar } from 'react-native'
import Loading from '@components/Loading'
import Header from '@components/Header'
import Title from '@components/Title'
import * as auth from '@services/Auth'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'Home',
      currentUser: null
    }
  }

  componentDidMount() {
    this.setState({currentUser : auth.currentUser})
  }

  navigate(route) {
    this.props.navigation.navigate(route)
  }

  render() {
    return (
      <View>
        { this.state.currentUser ? (
          <SafeAreaView>
            <Header user={this.state.currentUser} upcoming={2} />
            <Title name={'Events'} action={() => this.navigate('Events')} />
            <Title name={'Threads'} action={() => this.navigate('Threads')} />
            <Title name={'Survey'} action={() => this.navigate('Profile')} />
          </SafeAreaView>
          ) : (
          <Loading fullscreen={true} />
        )}
      </View>
    );
  }
}
